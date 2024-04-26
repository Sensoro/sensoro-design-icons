// This icon file is generated automatically.
import * as React from 'react';
import ChemicalPlantOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ChemicalPlantOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ChemicalPlantOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ChemicalPlantOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ChemicalPlantOutlined);

RefIcon.displayName = 'ChemicalPlantOutlined';

export default RefIcon;
