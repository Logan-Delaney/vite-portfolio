import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Box, Text, RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const keySize = 0.018;      // 18mm keys
const keySpacing = 0.003;   // 3mm spacing for slightly more space
const keyHeight = 0.01;
const framePadding = 0.005;

function insertNameToRow(rowCount, name) {
  const arr = new Array(rowCount).fill('');
  const nameChars = name.split('');
  const start = Math.floor((rowCount - nameChars.length) / 2);
  nameChars.forEach((ch, i) => (arr[start + i] = ch));
  return arr;
}

function Key({ 
  width, 
  label, 
  position, 
  onKeyPress, 
  pressedKeys, 
  keyId 
}) {
  const meshRef = useRef();
  const isPressed = pressedKeys.has(keyId);
  const isSpacer = label === 'spacer';
  
  // Define key colors based on the mechanical keyboard scheme
  const getKeyColor = () => {
    if (isPressed) return "#3a4a5a"; // Darker blue when pressed
    
    // Special accent keys (red)
    if (['delete'].includes(label.toLowerCase())) return "#FF6B47";
    
    // Function and special keys (darker blue like in reference image)
    if (['tab', 'caps lock', 'shift', '⌘', 'return'].includes(label.toLowerCase())) return "#4A5F7A";
    
    // Regular keys and spacers (blue like the reference image)
    return "#6B8CAE";
  };
  
  // Animate key press
  useFrame(() => {
    if (meshRef.current) {
      const targetZ = isPressed ? -keyHeight * 0.3 : 0;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.3;
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    // Now all keys are clickable, including spacers
    if (onKeyPress) {
      onKeyPress(keyId, label || 'spacer');
    }
  };

  const handlePointerOver = (e) => {
    // All keys now show pointer cursor
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'default';
  };

  return (
    <group position={position}>
      <RoundedBox 
        ref={meshRef}
        args={[width, keySize, keyHeight]} 
        radius={0.003} 
        smoothness={4}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshStandardMaterial 
          color={getKeyColor()} 
        />
        {label && label !== 'spacer' && (
          <Text
            fontSize={0.007}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, keyHeight / 2 + 0.0005]}
          >
            {label}
          </Text>
        )}
      </RoundedBox>
    </group>
  );
}

function ArrowKey({ 
  position, 
  symbol, 
  onKeyPress, 
  pressedKeys, 
  keyId 
}) {
  const meshRef = useRef();
  const isPressed = pressedKeys.has(keyId);
  
  useFrame(() => {
    if (meshRef.current) {
      const targetZ = isPressed ? -keyHeight * 0.3 : 0;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.3;
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (onKeyPress) {
      onKeyPress(keyId, symbol);
    }
  };

  return (
    <group position={position}>
      <RoundedBox 
        ref={meshRef}
        args={[keySize, keySize / 2, keyHeight]} 
        radius={0.003} 
        smoothness={4}
        onClick={handleClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <meshStandardMaterial color={isPressed ? "#3a4a5a" : "#6B8CAE"} />
        <Text 
          fontSize={0.007} 
          color="#ffffff" 
          anchorX="center" 
          anchorY="middle" 
          position={[0, 0, keyHeight / 2 + 0.0005]}
        >
          {symbol}
        </Text>
      </RoundedBox>
    </group>
  );
}

export function Keyboard3D({ 
  scale = [1, 1, 1], 
  position = [1, 1, 1], 
  rotation = [0, 0, 0],
  onKeyPress 
}) {
  const [pressedKeys, setPressedKeys] = useState(new Set());
  const [ready, setReady] = useState(false);

  const layout = useMemo(() => {
    return [
      { count: 14, nameLabels: ['spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer', 'delete'] },
      { count: 14, nameLabels: ['tab', 'spacer', 'spacer', 'W', 'A', 'L', 'T', 'E', 'R', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer'] },
      { count: 13, nameLabels: ['caps lock', 'spacer', 'spacer', 'L', 'O', 'G', 'A', 'N', 'spacer', 'spacer', 'spacer', 'spacer', 'return'] },
      { count: 12, nameLabels: ['shift', 'spacer', 'D', 'E', 'L', 'A', 'N', 'E', 'Y', 'spacer', 'spacer', 'shift'] },
      { count: 7, nameLabels: ['spacer', 'spacer', 'spacer', '⌘', '', '⌘', 'spacer'] },
    ];
  }, []);

  const maxKeys = Math.max(...layout.map(row => row.count));
  const totalWidth = maxKeys * (keySize + keySpacing) - keySpacing + framePadding * 2;
  const totalDepth = layout.length * (keySize + keySpacing) - keySpacing + framePadding * 2;
  const frameThickness = 0.01;

  const handleKeyPress = (keyId, label) => {
    // Add visual feedback
    setPressedKeys(prev => new Set([...prev, keyId]));
    // setLastPressed(label || keyId);
    
    // Remove press effect after animation
    setTimeout(() => {
      setPressedKeys(prev => {
        const next = new Set(prev);
        next.delete(keyId);
        return next;
      });
    }, 150);

    // Call external handler if provided
    if (onKeyPress) {
      onKeyPress(keyId, label);
    }
  };
  
  useEffect(() => {
    // Wait one frame so all Text components can sync
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) {
    // Optionally show a loader here
    return null;
  }

  return (
    <group scale={scale} position={position} rotation={rotation}>
      {/* Status display */}
      <Text
        fontSize={0.01}
        color="#333"
        anchorX="center"
        anchorY="middle"
        position={[0, totalDepth / 2 + 0.03, 0.02]}
      >
        {/* {lastPressed ? `Last pressed: ${lastPressed}` : 'Click any key!'} */}
      </Text>
      <RoundedBox
        args={[totalWidth + 0.03, totalDepth, frameThickness]}
        radius={0.004}
        smoothness={2}
        position={[0, 0, -frameThickness / 2]}
      >
        <meshStandardMaterial color="#44464b" />
      </RoundedBox>

      {/* Keyboard keys */}
      {layout.map((row, rowIndex) => {
        const yOffset = (layout.length / 2 - rowIndex - 0.5) * (keySize + keySpacing);
        let xRunningOffset = 0;

        return (
          <group key={rowIndex} position={[-totalWidth / 2 + keySize / 2 + framePadding - .018, yOffset, 0]}>
            {Array.from({ length: row.count }).map((_, col) => {
              const label = row.nameLabels[col] || '';
              const keyId = `${rowIndex}-${col}`;

              // Custom widths for special keys
              let width = keySize;
              if (['delete', 'tab'].includes(label.toLowerCase())) width = keySize * 2;
              if (['caps lock', 'return'].includes(label.toLowerCase())) width = keySize * 2.09;
              if (label.toLowerCase() === '⌘') width = keySize * 1.3;
              if (['shift'].includes(label.toLowerCase())) width = keySize * 2.68;
              
              const isSpacebarRow = rowIndex === layout.length - 1;
              const isTrueSpacebar = isSpacebarRow && label === '';
              if (isTrueSpacebar) width = keySize * 6;

              const keyPosition = [xRunningOffset + width / 2, 0, 0];
              xRunningOffset += width + keySpacing;

              return (
                <Key
                  key={col}
                  width={width}
                  label={label}
                  position={keyPosition}
                  onKeyPress={handleKeyPress}
                  pressedKeys={pressedKeys}
                  keyId={keyId}
                />
              );
            })}
          </group>
        );
      })}

      {/* Arrow keys cluster */}
      <group position={[
        totalWidth / 2 - keySize * 1.5,
        -(totalDepth / 2) + keySize * .52,
        0
      ]}>
        <ArrowKey
          position={[-keySize - keySpacing, 0, 0]}
          symbol=""
          onKeyPress={handleKeyPress}
          pressedKeys={pressedKeys}
          keyId="arrow-left"
        />
        <ArrowKey
          position={[0, 0, 0]}
          symbol=""
          onKeyPress={handleKeyPress}
          pressedKeys={pressedKeys}
          keyId="arrow-down"
        />
        <ArrowKey
          position={[0, (keySize / 2) + 0.001, 0]}
          symbol=""
          onKeyPress={handleKeyPress}
          pressedKeys={pressedKeys}
          keyId="arrow-up"
        />
        <ArrowKey
          position={[keySize + keySpacing, 0, 0]}
          symbol=""
          onKeyPress={handleKeyPress}
          pressedKeys={pressedKeys}
          keyId="arrow-right"
        />
      </group>
    </group>
  );
}