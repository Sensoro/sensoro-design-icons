// This icon file is generated automatically.
import * as React from 'react';
import NucleicAcidOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NucleicAcidOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NucleicAcidOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NucleicAcidOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NucleicAcidOutlined);

RefIcon.displayName = 'NucleicAcidOutlined';

export default RefIcon;
