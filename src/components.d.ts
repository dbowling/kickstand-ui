/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IBreadcrumbs,
} from './scripts/components/breadcrumbs/breadcrumbs';

export namespace Components {
  interface CardBody {
    'cardSubtitle': string;
    'cardTitle': string;
  }
  interface CardFooter {}
  interface DropdownItem {
    'closeOnClick': boolean;
  }
  interface KsAccordion {
    'size': string;
  }
  interface KsAccordionSlide {
    'expanded': boolean;
    'heading': string;
    'toggleSlide': () => Promise<void>;
  }
  interface KsAlert {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'header': string;
    'note': boolean;
  }
  interface KsBadge {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'hollow': boolean;
  }
  interface KsBreadcrumbs {
    'breadcrumbs': IBreadcrumbs[];
  }
  interface KsButton {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'controls': string;
    'cssClass': string;
    'describedBy': string;
    'disabled': boolean;
    'display': 'solid' | 'hollow' | 'clear' | 'link';
    'expanded': boolean;
    'haspopup': boolean;
    'hideText': boolean;
    'href': string;
    'icon': string;
    'iconDirection': 'left' | 'right';
    'loading': boolean;
    'size': 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    'tabIndex': number;
    'type': 'button' | 'submit' | 'reset';
  }
  interface KsCard {
    'alt': string;
    'clickable': boolean;
    'imgDirection': string;
    'imgSrc': string;
    'lazy': boolean;
    'threshold': number;
    'url': string;
  }
  interface KsCarousel {
    'autoplay': boolean;
    'hideControls': boolean;
    'hideIndicators': boolean;
    'thumbnails': boolean;
    'timer': number;
  }
  interface KsCarouselSlide {
    'align': 'start' | 'center' | 'end';
    'alt': string;
    'clickable': boolean;
    'lazy': boolean;
    'position': 'start' | 'center' | 'end';
    'src': string;
    'threshold': number;
    'url': string;
  }
  interface KsColumn {
    'align': 'start' | 'center' | 'end';
  }
  interface KsDropdown {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'display': 'solid' | 'hollow' | 'clear' | 'link';
    'hideIndicator': boolean;
    'hideText': boolean;
    'icon': string;
    'megaMenu': boolean;
    'position': 'left' | 'right';
    'text': string;
  }
  interface KsFormField {
    'disabled': boolean;
    'errorMessage': string;
    'helpText': string;
    'invalid': boolean;
    'label': string;
    'max'?: number;
    'min'?: number;
    'placeholder': string;
    'required': boolean;
    'requiredText': string;
    'step'?: number;
    'tooltipText': string;
    'type': 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' | 'spin-box';
    'value'?: string | number | null;
  }
  interface KsImg {
    'alt': string;
    'cssClass': string;
    'lazy': boolean;
    'src': string;
    'threshold': number;
  }
  interface KsLoading {
    'message': string;
    'showMessage': boolean;
    'type': 'spinner' | 'ellipsis';
  }
  interface KsLoadingOverlay {
    'absolute': boolean;
    'hide': () => Promise<void>;
    'message': string;
    'show': () => Promise<void>;
    'showMessage': boolean;
    'size': 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  }
  interface KsModal {
    'dismissible': boolean;
    'hide': () => Promise<void>;
    'modalTitle': string;
    'show': () => Promise<void>;
    'size': 'sm' | 'md' | 'lg';
    'titleId': string;
  }
  interface KsModalFooter {}
  interface KsNavbar {
    'altText': string;
    'collapseAt': 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'inverted': boolean;
    'logoUrl': string;
    'tagline': string;
  }
  interface KsNavbarGroup {
    'position': 'left' | 'right';
  }
  interface KsNavbarItem {
    'position': string;
  }
  interface KsNavbarRow {}
  interface KsOverlay {
    'absolute': boolean;
    'dismissible': boolean;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
    'theme': 'dark' | 'light';
    'titleId': string;
  }
  interface KsProgressBar {
    'description': string;
    'hideDescription': boolean;
    'hideProgressLabel': boolean;
    'progressLabel': string;
    'size': string;
    'type': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'value': number;
  }
  interface KsRow {
    'align': 'start' | 'center' | 'end';
    'noGutter': boolean;
  }
  interface KsSideDrawer {
    'headerText': string;
    'hide': () => Promise<void>;
    'name': string;
    'position': 'left' | 'right';
    'show': () => Promise<void>;
    'size': 'sm' | 'md' | 'lg' | 'xl';
  }
  interface KsSpinBox {
    'labelId': string;
    'max': number;
    'min': number;
    'spinBoxId': string;
    'step': number;
    'value': number;
  }
  interface KsTab {
    'controls': string;
  }
  interface KsTabList {
    'content': boolean;
    'disable': boolean;
    'hideDecoration': boolean;
    'name': string;
    'position': string;
    'show': boolean;
    'size': string;
  }
  interface KsTabPanel {
    'tabId': string;
  }
  interface KsTabs {
    'position': string;
  }
  interface KsTooltip {
    'disable': boolean;
    'hideDecoration': boolean;
    'position': 'top' | 'bottom' | 'left' | 'right';
    'show': boolean;
    'size': 'sm' | 'md' | 'lg' | 'xl';
    'text': string;
  }
}

declare global {


  interface HTMLCardBodyElement extends Components.CardBody, HTMLStencilElement {}
  var HTMLCardBodyElement: {
    prototype: HTMLCardBodyElement;
    new (): HTMLCardBodyElement;
  };

  interface HTMLCardFooterElement extends Components.CardFooter, HTMLStencilElement {}
  var HTMLCardFooterElement: {
    prototype: HTMLCardFooterElement;
    new (): HTMLCardFooterElement;
  };

  interface HTMLDropdownItemElement extends Components.DropdownItem, HTMLStencilElement {}
  var HTMLDropdownItemElement: {
    prototype: HTMLDropdownItemElement;
    new (): HTMLDropdownItemElement;
  };

  interface HTMLKsAccordionElement extends Components.KsAccordion, HTMLStencilElement {}
  var HTMLKsAccordionElement: {
    prototype: HTMLKsAccordionElement;
    new (): HTMLKsAccordionElement;
  };

  interface HTMLKsAccordionSlideElement extends Components.KsAccordionSlide, HTMLStencilElement {}
  var HTMLKsAccordionSlideElement: {
    prototype: HTMLKsAccordionSlideElement;
    new (): HTMLKsAccordionSlideElement;
  };

  interface HTMLKsAlertElement extends Components.KsAlert, HTMLStencilElement {}
  var HTMLKsAlertElement: {
    prototype: HTMLKsAlertElement;
    new (): HTMLKsAlertElement;
  };

  interface HTMLKsBadgeElement extends Components.KsBadge, HTMLStencilElement {}
  var HTMLKsBadgeElement: {
    prototype: HTMLKsBadgeElement;
    new (): HTMLKsBadgeElement;
  };

  interface HTMLKsBreadcrumbsElement extends Components.KsBreadcrumbs, HTMLStencilElement {}
  var HTMLKsBreadcrumbsElement: {
    prototype: HTMLKsBreadcrumbsElement;
    new (): HTMLKsBreadcrumbsElement;
  };

  interface HTMLKsButtonElement extends Components.KsButton, HTMLStencilElement {}
  var HTMLKsButtonElement: {
    prototype: HTMLKsButtonElement;
    new (): HTMLKsButtonElement;
  };

  interface HTMLKsCardElement extends Components.KsCard, HTMLStencilElement {}
  var HTMLKsCardElement: {
    prototype: HTMLKsCardElement;
    new (): HTMLKsCardElement;
  };

  interface HTMLKsCarouselElement extends Components.KsCarousel, HTMLStencilElement {}
  var HTMLKsCarouselElement: {
    prototype: HTMLKsCarouselElement;
    new (): HTMLKsCarouselElement;
  };

  interface HTMLKsCarouselSlideElement extends Components.KsCarouselSlide, HTMLStencilElement {}
  var HTMLKsCarouselSlideElement: {
    prototype: HTMLKsCarouselSlideElement;
    new (): HTMLKsCarouselSlideElement;
  };

  interface HTMLKsColumnElement extends Components.KsColumn, HTMLStencilElement {}
  var HTMLKsColumnElement: {
    prototype: HTMLKsColumnElement;
    new (): HTMLKsColumnElement;
  };

  interface HTMLKsDropdownElement extends Components.KsDropdown, HTMLStencilElement {}
  var HTMLKsDropdownElement: {
    prototype: HTMLKsDropdownElement;
    new (): HTMLKsDropdownElement;
  };

  interface HTMLKsFormFieldElement extends Components.KsFormField, HTMLStencilElement {}
  var HTMLKsFormFieldElement: {
    prototype: HTMLKsFormFieldElement;
    new (): HTMLKsFormFieldElement;
  };

  interface HTMLKsImgElement extends Components.KsImg, HTMLStencilElement {}
  var HTMLKsImgElement: {
    prototype: HTMLKsImgElement;
    new (): HTMLKsImgElement;
  };

  interface HTMLKsLoadingElement extends Components.KsLoading, HTMLStencilElement {}
  var HTMLKsLoadingElement: {
    prototype: HTMLKsLoadingElement;
    new (): HTMLKsLoadingElement;
  };

  interface HTMLKsLoadingOverlayElement extends Components.KsLoadingOverlay, HTMLStencilElement {}
  var HTMLKsLoadingOverlayElement: {
    prototype: HTMLKsLoadingOverlayElement;
    new (): HTMLKsLoadingOverlayElement;
  };

  interface HTMLKsModalElement extends Components.KsModal, HTMLStencilElement {}
  var HTMLKsModalElement: {
    prototype: HTMLKsModalElement;
    new (): HTMLKsModalElement;
  };

  interface HTMLKsModalFooterElement extends Components.KsModalFooter, HTMLStencilElement {}
  var HTMLKsModalFooterElement: {
    prototype: HTMLKsModalFooterElement;
    new (): HTMLKsModalFooterElement;
  };

  interface HTMLKsNavbarElement extends Components.KsNavbar, HTMLStencilElement {}
  var HTMLKsNavbarElement: {
    prototype: HTMLKsNavbarElement;
    new (): HTMLKsNavbarElement;
  };

  interface HTMLKsNavbarGroupElement extends Components.KsNavbarGroup, HTMLStencilElement {}
  var HTMLKsNavbarGroupElement: {
    prototype: HTMLKsNavbarGroupElement;
    new (): HTMLKsNavbarGroupElement;
  };

  interface HTMLKsNavbarItemElement extends Components.KsNavbarItem, HTMLStencilElement {}
  var HTMLKsNavbarItemElement: {
    prototype: HTMLKsNavbarItemElement;
    new (): HTMLKsNavbarItemElement;
  };

  interface HTMLKsNavbarRowElement extends Components.KsNavbarRow, HTMLStencilElement {}
  var HTMLKsNavbarRowElement: {
    prototype: HTMLKsNavbarRowElement;
    new (): HTMLKsNavbarRowElement;
  };

  interface HTMLKsOverlayElement extends Components.KsOverlay, HTMLStencilElement {}
  var HTMLKsOverlayElement: {
    prototype: HTMLKsOverlayElement;
    new (): HTMLKsOverlayElement;
  };

  interface HTMLKsProgressBarElement extends Components.KsProgressBar, HTMLStencilElement {}
  var HTMLKsProgressBarElement: {
    prototype: HTMLKsProgressBarElement;
    new (): HTMLKsProgressBarElement;
  };

  interface HTMLKsRowElement extends Components.KsRow, HTMLStencilElement {}
  var HTMLKsRowElement: {
    prototype: HTMLKsRowElement;
    new (): HTMLKsRowElement;
  };

  interface HTMLKsSideDrawerElement extends Components.KsSideDrawer, HTMLStencilElement {}
  var HTMLKsSideDrawerElement: {
    prototype: HTMLKsSideDrawerElement;
    new (): HTMLKsSideDrawerElement;
  };

  interface HTMLKsSpinBoxElement extends Components.KsSpinBox, HTMLStencilElement {}
  var HTMLKsSpinBoxElement: {
    prototype: HTMLKsSpinBoxElement;
    new (): HTMLKsSpinBoxElement;
  };

  interface HTMLKsTabElement extends Components.KsTab, HTMLStencilElement {}
  var HTMLKsTabElement: {
    prototype: HTMLKsTabElement;
    new (): HTMLKsTabElement;
  };

  interface HTMLKsTabListElement extends Components.KsTabList, HTMLStencilElement {}
  var HTMLKsTabListElement: {
    prototype: HTMLKsTabListElement;
    new (): HTMLKsTabListElement;
  };

  interface HTMLKsTabPanelElement extends Components.KsTabPanel, HTMLStencilElement {}
  var HTMLKsTabPanelElement: {
    prototype: HTMLKsTabPanelElement;
    new (): HTMLKsTabPanelElement;
  };

  interface HTMLKsTabsElement extends Components.KsTabs, HTMLStencilElement {}
  var HTMLKsTabsElement: {
    prototype: HTMLKsTabsElement;
    new (): HTMLKsTabsElement;
  };

  interface HTMLKsTooltipElement extends Components.KsTooltip, HTMLStencilElement {}
  var HTMLKsTooltipElement: {
    prototype: HTMLKsTooltipElement;
    new (): HTMLKsTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'card-body': HTMLCardBodyElement;
    'card-footer': HTMLCardFooterElement;
    'dropdown-item': HTMLDropdownItemElement;
    'ks-accordion': HTMLKsAccordionElement;
    'ks-accordion-slide': HTMLKsAccordionSlideElement;
    'ks-alert': HTMLKsAlertElement;
    'ks-badge': HTMLKsBadgeElement;
    'ks-breadcrumbs': HTMLKsBreadcrumbsElement;
    'ks-button': HTMLKsButtonElement;
    'ks-card': HTMLKsCardElement;
    'ks-carousel': HTMLKsCarouselElement;
    'ks-carousel-slide': HTMLKsCarouselSlideElement;
    'ks-column': HTMLKsColumnElement;
    'ks-dropdown': HTMLKsDropdownElement;
    'ks-form-field': HTMLKsFormFieldElement;
    'ks-img': HTMLKsImgElement;
    'ks-loading': HTMLKsLoadingElement;
    'ks-loading-overlay': HTMLKsLoadingOverlayElement;
    'ks-modal': HTMLKsModalElement;
    'ks-modal-footer': HTMLKsModalFooterElement;
    'ks-navbar': HTMLKsNavbarElement;
    'ks-navbar-group': HTMLKsNavbarGroupElement;
    'ks-navbar-item': HTMLKsNavbarItemElement;
    'ks-navbar-row': HTMLKsNavbarRowElement;
    'ks-overlay': HTMLKsOverlayElement;
    'ks-progress-bar': HTMLKsProgressBarElement;
    'ks-row': HTMLKsRowElement;
    'ks-side-drawer': HTMLKsSideDrawerElement;
    'ks-spin-box': HTMLKsSpinBoxElement;
    'ks-tab': HTMLKsTabElement;
    'ks-tab-list': HTMLKsTabListElement;
    'ks-tab-panel': HTMLKsTabPanelElement;
    'ks-tabs': HTMLKsTabsElement;
    'ks-tooltip': HTMLKsTooltipElement;
  }
}

declare namespace LocalJSX {
  interface CardBody {
    'cardSubtitle'?: string;
    'cardTitle'?: string;
  }
  interface CardFooter {}
  interface DropdownItem {
    'closeOnClick'?: boolean;
    'onCloseDropdown'?: (event: CustomEvent<any>) => void;
  }
  interface KsAccordion {
    'size'?: string;
  }
  interface KsAccordionSlide {
    'expanded'?: boolean;
    'heading'?: string;
  }
  interface KsAlert {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'header'?: string;
    'note'?: boolean;
  }
  interface KsBadge {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'hollow'?: boolean;
  }
  interface KsBreadcrumbs {
    'breadcrumbs'?: IBreadcrumbs[];
  }
  interface KsButton {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'controls'?: string;
    'cssClass'?: string;
    'describedBy'?: string;
    'disabled'?: boolean;
    'display'?: 'solid' | 'hollow' | 'clear' | 'link';
    'expanded'?: boolean;
    'haspopup'?: boolean;
    'hideText'?: boolean;
    'href'?: string;
    'icon'?: string;
    'iconDirection'?: 'left' | 'right';
    'loading'?: boolean;
    'size'?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    'tabIndex'?: number;
    'type'?: 'button' | 'submit' | 'reset';
  }
  interface KsCard {
    'alt'?: string;
    'clickable'?: boolean;
    'imgDirection'?: string;
    'imgSrc'?: string;
    'lazy'?: boolean;
    'threshold'?: number;
    'url'?: string;
  }
  interface KsCarousel {
    'autoplay'?: boolean;
    'hideControls'?: boolean;
    'hideIndicators'?: boolean;
    'thumbnails'?: boolean;
    'timer'?: number;
  }
  interface KsCarouselSlide {
    'align'?: 'start' | 'center' | 'end';
    'alt'?: string;
    'clickable'?: boolean;
    'lazy'?: boolean;
    'position'?: 'start' | 'center' | 'end';
    'src'?: string;
    'threshold'?: number;
    'url'?: string;
  }
  interface KsColumn {
    'align'?: 'start' | 'center' | 'end';
  }
  interface KsDropdown {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'display'?: 'solid' | 'hollow' | 'clear' | 'link';
    'hideIndicator'?: boolean;
    'hideText'?: boolean;
    'icon'?: string;
    'megaMenu'?: boolean;
    'position'?: 'left' | 'right';
    'text'?: string;
  }
  interface KsFormField {
    'disabled'?: boolean;
    'errorMessage'?: string;
    'helpText'?: string;
    'invalid'?: boolean;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'onUpdated'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'required'?: boolean;
    'requiredText'?: string;
    'step'?: number;
    'tooltipText'?: string;
    'type'?: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' | 'spin-box';
    'value'?: string | number | null;
  }
  interface KsImg {
    'alt'?: string;
    'cssClass'?: string;
    'lazy'?: boolean;
    'src'?: string;
    'threshold'?: number;
  }
  interface KsLoading {
    'message'?: string;
    'showMessage'?: boolean;
    'type'?: 'spinner' | 'ellipsis';
  }
  interface KsLoadingOverlay {
    'absolute'?: boolean;
    'message'?: string;
    'showMessage'?: boolean;
    'size'?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  }
  interface KsModal {
    'dismissible'?: boolean;
    'modalTitle'?: string;
    'size'?: 'sm' | 'md' | 'lg';
    'titleId'?: string;
  }
  interface KsModalFooter {}
  interface KsNavbar {
    'altText'?: string;
    'collapseAt'?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    'inverted'?: boolean;
    'logoUrl'?: string;
    'tagline'?: string;
  }
  interface KsNavbarGroup {
    'position'?: 'left' | 'right';
  }
  interface KsNavbarItem {
    'position'?: string;
  }
  interface KsNavbarRow {}
  interface KsOverlay {
    'absolute'?: boolean;
    'dismissible'?: boolean;
    'theme'?: 'dark' | 'light';
    'titleId'?: string;
  }
  interface KsProgressBar {
    'description'?: string;
    'hideDescription'?: boolean;
    'hideProgressLabel'?: boolean;
    'progressLabel'?: string;
    'size'?: string;
    'type'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'value'?: number;
  }
  interface KsRow {
    'align'?: 'start' | 'center' | 'end';
    'noGutter'?: boolean;
  }
  interface KsSideDrawer {
    'headerText'?: string;
    'name'?: string;
    'position'?: 'left' | 'right';
    'size'?: 'sm' | 'md' | 'lg' | 'xl';
  }
  interface KsSpinBox {
    'labelId'?: string;
    'max'?: number;
    'min'?: number;
    'onUpdated'?: (event: CustomEvent<any>) => void;
    'spinBoxId'?: string;
    'step'?: number;
    'value'?: number;
  }
  interface KsTab {
    'controls'?: string;
  }
  interface KsTabList {
    'content'?: boolean;
    'disable'?: boolean;
    'hideDecoration'?: boolean;
    'name'?: string;
    'position'?: string;
    'show'?: boolean;
    'size'?: string;
  }
  interface KsTabPanel {
    'tabId'?: string;
  }
  interface KsTabs {
    'position'?: string;
  }
  interface KsTooltip {
    'disable'?: boolean;
    'hideDecoration'?: boolean;
    'position'?: 'top' | 'bottom' | 'left' | 'right';
    'show'?: boolean;
    'size'?: 'sm' | 'md' | 'lg' | 'xl';
    'text'?: string;
  }

  interface IntrinsicElements {
    'card-body': CardBody;
    'card-footer': CardFooter;
    'dropdown-item': DropdownItem;
    'ks-accordion': KsAccordion;
    'ks-accordion-slide': KsAccordionSlide;
    'ks-alert': KsAlert;
    'ks-badge': KsBadge;
    'ks-breadcrumbs': KsBreadcrumbs;
    'ks-button': KsButton;
    'ks-card': KsCard;
    'ks-carousel': KsCarousel;
    'ks-carousel-slide': KsCarouselSlide;
    'ks-column': KsColumn;
    'ks-dropdown': KsDropdown;
    'ks-form-field': KsFormField;
    'ks-img': KsImg;
    'ks-loading': KsLoading;
    'ks-loading-overlay': KsLoadingOverlay;
    'ks-modal': KsModal;
    'ks-modal-footer': KsModalFooter;
    'ks-navbar': KsNavbar;
    'ks-navbar-group': KsNavbarGroup;
    'ks-navbar-item': KsNavbarItem;
    'ks-navbar-row': KsNavbarRow;
    'ks-overlay': KsOverlay;
    'ks-progress-bar': KsProgressBar;
    'ks-row': KsRow;
    'ks-side-drawer': KsSideDrawer;
    'ks-spin-box': KsSpinBox;
    'ks-tab': KsTab;
    'ks-tab-list': KsTabList;
    'ks-tab-panel': KsTabPanel;
    'ks-tabs': KsTabs;
    'ks-tooltip': KsTooltip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'card-body': LocalJSX.CardBody & JSXBase.HTMLAttributes<HTMLCardBodyElement>;
      'card-footer': LocalJSX.CardFooter & JSXBase.HTMLAttributes<HTMLCardFooterElement>;
      'dropdown-item': LocalJSX.DropdownItem & JSXBase.HTMLAttributes<HTMLDropdownItemElement>;
      'ks-accordion': LocalJSX.KsAccordion & JSXBase.HTMLAttributes<HTMLKsAccordionElement>;
      'ks-accordion-slide': LocalJSX.KsAccordionSlide & JSXBase.HTMLAttributes<HTMLKsAccordionSlideElement>;
      'ks-alert': LocalJSX.KsAlert & JSXBase.HTMLAttributes<HTMLKsAlertElement>;
      'ks-badge': LocalJSX.KsBadge & JSXBase.HTMLAttributes<HTMLKsBadgeElement>;
      'ks-breadcrumbs': LocalJSX.KsBreadcrumbs & JSXBase.HTMLAttributes<HTMLKsBreadcrumbsElement>;
      'ks-button': LocalJSX.KsButton & JSXBase.HTMLAttributes<HTMLKsButtonElement>;
      'ks-card': LocalJSX.KsCard & JSXBase.HTMLAttributes<HTMLKsCardElement>;
      'ks-carousel': LocalJSX.KsCarousel & JSXBase.HTMLAttributes<HTMLKsCarouselElement>;
      'ks-carousel-slide': LocalJSX.KsCarouselSlide & JSXBase.HTMLAttributes<HTMLKsCarouselSlideElement>;
      'ks-column': LocalJSX.KsColumn & JSXBase.HTMLAttributes<HTMLKsColumnElement>;
      'ks-dropdown': LocalJSX.KsDropdown & JSXBase.HTMLAttributes<HTMLKsDropdownElement>;
      'ks-form-field': LocalJSX.KsFormField & JSXBase.HTMLAttributes<HTMLKsFormFieldElement>;
      'ks-img': LocalJSX.KsImg & JSXBase.HTMLAttributes<HTMLKsImgElement>;
      'ks-loading': LocalJSX.KsLoading & JSXBase.HTMLAttributes<HTMLKsLoadingElement>;
      'ks-loading-overlay': LocalJSX.KsLoadingOverlay & JSXBase.HTMLAttributes<HTMLKsLoadingOverlayElement>;
      'ks-modal': LocalJSX.KsModal & JSXBase.HTMLAttributes<HTMLKsModalElement>;
      'ks-modal-footer': LocalJSX.KsModalFooter & JSXBase.HTMLAttributes<HTMLKsModalFooterElement>;
      'ks-navbar': LocalJSX.KsNavbar & JSXBase.HTMLAttributes<HTMLKsNavbarElement>;
      'ks-navbar-group': LocalJSX.KsNavbarGroup & JSXBase.HTMLAttributes<HTMLKsNavbarGroupElement>;
      'ks-navbar-item': LocalJSX.KsNavbarItem & JSXBase.HTMLAttributes<HTMLKsNavbarItemElement>;
      'ks-navbar-row': LocalJSX.KsNavbarRow & JSXBase.HTMLAttributes<HTMLKsNavbarRowElement>;
      'ks-overlay': LocalJSX.KsOverlay & JSXBase.HTMLAttributes<HTMLKsOverlayElement>;
      'ks-progress-bar': LocalJSX.KsProgressBar & JSXBase.HTMLAttributes<HTMLKsProgressBarElement>;
      'ks-row': LocalJSX.KsRow & JSXBase.HTMLAttributes<HTMLKsRowElement>;
      'ks-side-drawer': LocalJSX.KsSideDrawer & JSXBase.HTMLAttributes<HTMLKsSideDrawerElement>;
      'ks-spin-box': LocalJSX.KsSpinBox & JSXBase.HTMLAttributes<HTMLKsSpinBoxElement>;
      'ks-tab': LocalJSX.KsTab & JSXBase.HTMLAttributes<HTMLKsTabElement>;
      'ks-tab-list': LocalJSX.KsTabList & JSXBase.HTMLAttributes<HTMLKsTabListElement>;
      'ks-tab-panel': LocalJSX.KsTabPanel & JSXBase.HTMLAttributes<HTMLKsTabPanelElement>;
      'ks-tabs': LocalJSX.KsTabs & JSXBase.HTMLAttributes<HTMLKsTabsElement>;
      'ks-tooltip': LocalJSX.KsTooltip & JSXBase.HTMLAttributes<HTMLKsTooltipElement>;
    }
  }
}


