// This icon file is generated automatically.
import * as React from 'react';
import ToiletPaperOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ToiletPaperOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ToiletPaperOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ToiletPaperOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ToiletPaperOutlined);

RefIcon.displayName = 'ToiletPaperOutlined';

export default RefIcon;
