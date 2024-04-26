// This icon file is generated automatically.
import * as React from 'react';
import FilePptOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FilePptOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilePptOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilePptOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilePptOutlined);

RefIcon.displayName = 'FilePptOutlined';

export default RefIcon;
