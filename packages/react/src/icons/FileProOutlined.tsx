// This icon file is generated automatically.
import * as React from 'react';
import FileProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileProOutlined);

RefIcon.displayName = 'FileProOutlined';

export default RefIcon;
