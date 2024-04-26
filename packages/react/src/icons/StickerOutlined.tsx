// This icon file is generated automatically.
import * as React from 'react';
import StickerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StickerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StickerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StickerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StickerOutlined);

RefIcon.displayName = 'StickerOutlined';

export default RefIcon;
