// This icon file is generated automatically.
import * as React from 'react';
import ChemicalPlantFilledSvg from '@sensoro-design/icons-svg/es/asn/ChemicalPlantFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ChemicalPlantFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ChemicalPlantFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ChemicalPlantFilled);

RefIcon.displayName = 'ChemicalPlantFilled';

export default RefIcon;
