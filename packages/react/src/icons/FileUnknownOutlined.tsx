// This icon file is generated automatically.
import * as React from 'react';
import FileUnknownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileUnknownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileUnknownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileUnknownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileUnknownOutlined);

RefIcon.displayName = 'FileUnknownOutlined';

export default RefIcon;
