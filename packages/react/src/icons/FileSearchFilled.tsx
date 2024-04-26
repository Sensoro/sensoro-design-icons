// This icon file is generated automatically.
import * as React from 'react';
import FileSearchFilledSvg from '@sensoro-design/icons-svg/es/asn/FileSearchFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileSearchFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileSearchFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileSearchFilled);

RefIcon.displayName = 'FileSearchFilled';

export default RefIcon;
