// This icon file is generated automatically.
import * as React from 'react';
import NucleicAcidFilledSvg from '@sensoro-design/icons-svg/es/asn/NucleicAcidFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NucleicAcidFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NucleicAcidFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NucleicAcidFilled);

RefIcon.displayName = 'NucleicAcidFilled';

export default RefIcon;
