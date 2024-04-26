// This icon file is generated automatically.
import * as React from 'react';
import FileJpgFilledSvg from '@sensoro-design/icons-svg/es/asn/FileJpgFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileJpgFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileJpgFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileJpgFilled);

RefIcon.displayName = 'FileJpgFilled';

export default RefIcon;
