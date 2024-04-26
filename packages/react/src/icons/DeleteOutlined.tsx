// This icon file is generated automatically.
import * as React from 'react';
import DeleteOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DeleteOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeleteOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeleteOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeleteOutlined);

RefIcon.displayName = 'DeleteOutlined';

export default RefIcon;
