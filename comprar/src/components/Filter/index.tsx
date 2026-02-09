import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


import { FilterStatus } from '@/types/FilterStatus';
import { styles } from './styles';
import { StatusIcon } from '../StatusIcon';

type FilterProps = TouchableOpacityProps & {
  status: FilterStatus,
  isActive: boolean
}

export const Filter: React.FC<FilterProps> = ({ status, isActive, ...rest }) => {

  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}> {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}</Text>
    </TouchableOpacity >
  );
}