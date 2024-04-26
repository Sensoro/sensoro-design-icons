// This icon file is generated automatically.
import * as React from 'react';
import FileFilledSvg from '@sensoro-design/icons-svg/es/asn/FileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileFilled);

RefIcon.displayName = 'FileFilled';

export default RefIcon;
