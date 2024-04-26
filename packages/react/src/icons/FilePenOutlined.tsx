// This icon file is generated automatically.
import * as React from 'react';
import FilePenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FilePenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilePenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilePenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilePenOutlined);

RefIcon.displayName = 'FilePenOutlined';

export default RefIcon;
