// This icon file is generated automatically.
import * as React from 'react';
import FileGifOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileGifOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileGifOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileGifOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileGifOutlined);

RefIcon.displayName = 'FileGifOutlined';

export default RefIcon;
