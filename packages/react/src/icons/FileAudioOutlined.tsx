// This icon file is generated automatically.
import * as React from 'react';
import FileAudioOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileAudioOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileAudioOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileAudioOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileAudioOutlined);

RefIcon.displayName = 'FileAudioOutlined';

export default RefIcon;
