// This icon file is generated automatically.
import * as React from 'react';
import SaveOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SaveOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SaveOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SaveOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SaveOutlined);

RefIcon.displayName = 'SaveOutlined';

export default RefIcon;
