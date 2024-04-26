// This icon file is generated automatically.
import * as React from 'react';
import FileSealOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileSealOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileSealOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileSealOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileSealOutlined);

RefIcon.displayName = 'FileSealOutlined';

export default RefIcon;
