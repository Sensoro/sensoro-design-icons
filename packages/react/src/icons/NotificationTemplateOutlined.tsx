// This icon file is generated automatically.
import * as React from 'react';
import NotificationTemplateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NotificationTemplateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NotificationTemplateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NotificationTemplateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NotificationTemplateOutlined);

RefIcon.displayName = 'NotificationTemplateOutlined';

export default RefIcon;
