// This icon file is generated automatically.
import * as React from 'react';
import EditOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EditOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EditOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EditOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EditOutlined);

RefIcon.displayName = 'EditOutlined';

export default RefIcon;
