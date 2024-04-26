// This icon file is generated automatically.
import * as React from 'react';
import FileJpegFilledSvg from '@sensoro-design/icons-svg/es/asn/FileJpegFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileJpegFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileJpegFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileJpegFilled);

RefIcon.displayName = 'FileJpegFilled';

export default RefIcon;
