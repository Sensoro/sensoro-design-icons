// This icon file is generated automatically.
import * as React from 'react';
import MolecularChainFilledSvg from '@sensoro-design/icons-svg/es/asn/MolecularChainFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MolecularChainFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MolecularChainFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MolecularChainFilled);

RefIcon.displayName = 'MolecularChainFilled';

export default RefIcon;
