// This icon file is generated automatically.
import * as React from 'react';
import QuestionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/QuestionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const QuestionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={QuestionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(QuestionOutlined);

RefIcon.displayName = 'QuestionOutlined';

export default RefIcon;
