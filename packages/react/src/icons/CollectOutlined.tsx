// This icon file is generated automatically.
import * as React from 'react';
import CollectOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CollectOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CollectOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CollectOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CollectOutlined);

RefIcon.displayName = 'CollectOutlined';

export default RefIcon;
