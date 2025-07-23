// Keyboard3D.jsx
import React, { useMemo } from 'react';
import { Box, Text, RoundedBox } from '@react-three/drei';

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

export function Keyboard3D({ scale = [1, 1, 1], position = [1, 1, 1], rotation = [0, 0, 0]}) {
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

  return (
    <group scale={scale} position={position} rotation={rotation}>
      {/* Keyboard frame and keys */}
      <RoundedBox
        args={[totalWidth + 0.03, totalDepth, frameThickness]}
        radius={0.004} // Slightly rounded corners
        smoothness={2}
        position={[0, 0, -frameThickness / 2]}
      >
        <meshStandardMaterial color="#62646C" />
      </RoundedBox>
      {layout.map((row, rowIndex) => {
        const rowWidth = row.count * (keySize + keySpacing) - keySpacing;
        const yOffset = (layout.length / 2 - rowIndex - 0.5) * (keySize + keySpacing);
        let xRunningOffset = 0;

          const isBottomRow = rowIndex === layout.length - 1;
          const leftShift = isBottomRow ? -keySize * 3 : 0;

        return (
            <group key={rowIndex} position={[-totalWidth / 2 + keySize / 2 + framePadding - .018, yOffset, 0]}>
            {Array.from({ length: row.count }).map((_, col) => {
              const label = row.nameLabels[col] || '';

              // Custom widths for special keys
              let width = keySize;
              if (['delete', 'tab'].includes(label.toLowerCase())) width = keySize * 2;
              if (['caps lock', 'return'].includes(label.toLowerCase())) width = keySize * 2.09;
              if (label.toLowerCase() === '⌘') width = keySize * 1.3;
              if (['shift'].includes(label.toLowerCase())) width = keySize * 2.68;
              // Only apply spacebar width on last row and when label is truly empty
              const isSpacebarRow = rowIndex === layout.length - 1;
              const isTrueSpacebar = isSpacebarRow && label === '';
              const isSpacer = label === 'spacer';
              if (isTrueSpacebar) width = keySize * 6;

              const keyPosition = [xRunningOffset + width / 2, 0, 0];
              xRunningOffset += width + keySpacing;

              return (
                <group key={col} position={keyPosition}>
                  <RoundedBox args={[width, keySize, keyHeight]} radius={0.003} smoothness={4}>
                    <meshStandardMaterial color="#e0e0e0" />
                    {label && label !== 'spacer' && label !== '⌘' && (
                      <Text
                        fontSize={0.007}
                        color="#111"
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
            })}
          </group>
        );
      })}
      {/* Arrow keys cluster in bottom right */}
      <group position={[
        totalWidth / 2 - keySize * 1.5,
        -(totalDepth / 2) + keySize * .52,
        0
      ]}>
        {/* Left Arrow */}
        <group position={[-keySize - keySpacing, 0, 0]}>
          <RoundedBox args={[keySize, keySize / 2, keyHeight]} radius={0.003} smoothness={4}>
            <meshStandardMaterial color="#e0e0e0" />
            <Text fontSize={0.007} color="#111" anchorX="center" anchorY="middle" position={[0, 0, keyHeight / 2 + 0.0005]}>
              {''} {/* Left arrow */}
            </Text>
          </RoundedBox>
        </group>
        {/* Down Arrow */}
        <group position={[0, 0, 0]}>
          <RoundedBox args={[keySize, keySize / 2, keyHeight]} radius={0.003} smoothness={4}>
            <meshStandardMaterial color="#e0e0e0" />
            <Text fontSize={0.007} color="#111" anchorX="center" anchorY="middle" position={[0, 0, keyHeight / 2 + 0.0005]}>
              {''} {/* Down triangle */}
            </Text>
          </RoundedBox>
        </group>
        {/* Up Arrow */}
        <group position={[0, (keySize / 2) + 0.001, 0]}>
          <RoundedBox args={[keySize, keySize / 2, keyHeight]} radius={0.003} smoothness={4}>
            <meshStandardMaterial color="#e0e0e0" />
            <Text fontSize={0.007} color="#111" anchorX="center" anchorY="middle" position={[0, 0, keyHeight / 2 + 0.0005]}>
              {''} {/* Up triangle */}
            </Text>
          </RoundedBox>
        </group>
        {/* Right Arrow */}
        <group position={[keySize + keySpacing, 0, 0]}>
          <RoundedBox args={[keySize, keySize / 2, keyHeight]} radius={0.003} smoothness={4}>
            <meshStandardMaterial color="#e0e0e0" />
            <Text fontSize={0.007} color="#111" anchorX="center" anchorY="middle" position={[0, 0, keyHeight / 2 + 0.0005]}>
              {''} {/* Right arrow */}
            </Text>
          </RoundedBox>
        </group>
      </group>
    </group>
  );
}

export default Keyboard3D;
