// This icon file is generated automatically.
import * as React from 'react';
import MolecularChainOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MolecularChainOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MolecularChainOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MolecularChainOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MolecularChainOutlined);

RefIcon.displayName = 'MolecularChainOutlined';

export default RefIcon;
