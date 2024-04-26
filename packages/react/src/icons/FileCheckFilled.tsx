// This icon file is generated automatically.
import * as React from 'react';
import FileCheckFilledSvg from '@sensoro-design/icons-svg/es/asn/FileCheckFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileCheckFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileCheckFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileCheckFilled);

RefIcon.displayName = 'FileCheckFilled';

export default RefIcon;
