// This icon file is generated automatically.
import * as React from 'react';
import FormOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FormOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FormOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FormOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FormOutlined);

RefIcon.displayName = 'FormOutlined';

export default RefIcon;
