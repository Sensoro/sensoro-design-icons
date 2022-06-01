import { useContext, useEffect } from 'react';
import IconContext from '../components/Context';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';

export const useInsertStyles = (styleStr?: string) => {
  const { csp, prefixCls = 's-icon' } = useContext(IconContext);

  useEffect(() => {
    updateCSS(styleStr ?? getIconStyles(prefixCls), 'sensoro-design-icons', {
      prepend: true,
      csp,
    });
  }, []);
};

function getIconStyles(prefixCls: string) {
  return `
    .${prefixCls} {
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .${prefixCls} > * {
      line-height: 1;
    }

    .${prefixCls} svg {
      display: inline-block;
    }

    .${prefixCls}::before {
      display: none;
    }

    .${prefixCls}[tabindex] {
      cursor: pointer;
    }

    .${prefixCls}-spin::before,
    .${prefixCls}-spin {
      display: inline-block;
      -webkit-animation: loadingCircle 1s infinite linear;
      animation: loadingCircle 1s infinite linear;
    }

    @-webkit-keyframes loadingCircle {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes loadingCircle {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `;
}
