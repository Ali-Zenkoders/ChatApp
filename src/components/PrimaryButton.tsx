import {StyleSheet, PressableProps, Pressable, Text} from 'react-native';
import React from 'react';

export interface PrimaryButtonProps extends PressableProps {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, ...props}) => {
  return (
    <Pressable {...props} style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'purple',
    borderRadius: 99,
    width: '100%',
    paddingVertical: 14,
  },
  Title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
