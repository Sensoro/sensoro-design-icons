// This icon file is generated automatically.
import * as React from 'react';
import FileMarkdownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileMarkdownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileMarkdownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileMarkdownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileMarkdownOutlined);

RefIcon.displayName = 'FileMarkdownOutlined';

export default RefIcon;
