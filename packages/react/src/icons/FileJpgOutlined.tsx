// This icon file is generated automatically.
import * as React from 'react';
import FileJpgOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileJpgOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileJpgOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileJpgOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileJpgOutlined);

RefIcon.displayName = 'FileJpgOutlined';

export default RefIcon;
