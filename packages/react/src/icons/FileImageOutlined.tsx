// This icon file is generated automatically.
import * as React from 'react';
import FileImageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileImageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileImageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileImageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileImageOutlined);

RefIcon.displayName = 'FileImageOutlined';

export default RefIcon;
