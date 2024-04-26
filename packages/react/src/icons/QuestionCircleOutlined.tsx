// This icon file is generated automatically.
import * as React from 'react';
import QuestionCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/QuestionCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const QuestionCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={QuestionCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(QuestionCircleOutlined);

RefIcon.displayName = 'QuestionCircleOutlined';

export default RefIcon;
