/**
 * Copyright 2021 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PropsWithChildren, ReactNode } from 'react';
import { AppLogo } from '../icon';
import { Footer } from '../layout';
import { SwissMadeOpenSource } from '../icon/logo';
import { Checked, Close } from '../icon/icon';
import style from './view.module.css';

type ViewProps = {
    dialog?: boolean;
    fitContent?: boolean;
    fullscreen?: boolean;
    minHeight?: string;
    onClose?: () => void;
    position?: 'fill' | '';
    textCenter?: boolean;
    width?: string;
    withBottomBar?: boolean;
}

/**
 * View component is used as a container component to wrap ViewHeader, ViewContent and ViewButtons
 * @param dialog wether to render the view as a dialog
 * @param fitContent tries to squeeze the whole view into the visible area, if true the icon specified through ViewContent withIcon will shrink if the visible area is bigger than the window height
 * @param fullscreen wether the View container should cover the whole window
 * @param minHeight optional minimum height, useful for keeping content area same size through multiple views
 * @param onClose if a callback is provided it will render a close button that triggers the callback
 * @param textCenter centers all text content in the view
 * @param width can be used to overwrite the default width of the inner area
 * @param withBottomBar enables a footer with some logo and language switch
 */
export function View({
  dialog = false,
  fitContent = false,
  fullscreen,
  children,
  minHeight,
  onClose,
  textCenter,
  width,
  withBottomBar,
}: PropsWithChildren<ViewProps>) {
  const containerClasses = `${
    style[fullscreen ? 'fullscreen' : 'fill']
  } ${
    dialog ? style.dialog : ''
  }`;
  let classNames = style.inner;
  if (fitContent) {
    classNames += ` ${style.fit}`;
  }
  if (textCenter) {
    classNames += ` ${style.textCenter}`;
  }
  const inlineStyles = {
    ...(minHeight && { minHeight }),
    ...(width && { width }),
  };
  return (
    <div className={containerClasses}>
      <div
        className={classNames}
        style={inlineStyles}>
        {children}
      </div>
      {onClose && (
        <button className={style.closeButton} onClick={onClose}>
          <Close />
        </button>
      )}
      {withBottomBar && (
        <div style={{ marginTop: 'auto' }}>
          <Footer>
            <SwissMadeOpenSource />
          </Footer>
        </div>
      )}
    </div>
  );
}

type ViewContentProps = {
    fullWidth?: boolean;
    minHeight?: string;
    textAlign?: 'center' | 'left';
    withIcon?: 'success';
}

/**
 * ViewContent useful for all sorts of content, text, images, grids and forms
 * @param fullWidth useful to present content on small screen on the full width of the screen
 * @param minHeight can be used to set a minimum content height to keep the same height over multiple views
 * @param textAlign allows overwriting text alignment in the content area
 * @param withIcon supports success icon currently, but could support other icons in the future
 */
export function ViewContent({
  children,
  fullWidth,
  minHeight,
  textAlign,
  withIcon,
  ...props
}: PropsWithChildren<ViewContentProps>) {
  const align = textAlign ? style[`text-${textAlign}`] : '';
  const containerWidth = fullWidth ? style.fullWidth : '';
  const classes = `${style.content} ${containerWidth} ${align}`;
  return (
    <div
      className={classes}
      style={minHeight ? { minHeight } : {}}
      {...props}>
      {withIcon === 'success' && (
        <Checked className={style.largeIcon} />
      )}
      {children}
    </div>
  );
}

type HeaderProps = {
    small?: boolean;
    title: ReactNode;
    withAppLogo?: boolean;
}

/**
 * ViewHeader component to render the view's title and a byline
 * @param small option to reduce the size of the header
 * @param title the title of the view
 * @param withAppLogo if true includes the BitBoxApp logo before the title
 */
export function ViewHeader({
  children,
  small,
  title,
  withAppLogo,
}: PropsWithChildren<HeaderProps>) {
  const headerStyles = small ? `${style.header} ${style.smallHeader}` : style.header;
  return (
    <header className={headerStyles}>
      {withAppLogo && <AppLogo />}
      <h1 className={style.title}>{title}</h1>
      {children}
    </header>
  );
}

type ViewButtonsProps = {}

/**
 * ViewButtons component use as container for buttons
 */
export function ViewButtons({ children }: PropsWithChildren<ViewButtonsProps>) {
  return (
    <div className={style.buttons}>
      {children}
    </div>
  );
}
