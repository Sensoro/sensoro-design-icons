// This icon file is generated automatically.
import * as React from 'react';
import FileVideoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileVideoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileVideoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileVideoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileVideoOutlined);

RefIcon.displayName = 'FileVideoOutlined';

export default RefIcon;
