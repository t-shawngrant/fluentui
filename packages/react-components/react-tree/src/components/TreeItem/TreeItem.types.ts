import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import {
  BaseTreeItemElement,
  BaseTreeItemElementIntersection,
  BaseTreeItemProps,
  BaseTreeItemSlots,
} from '../BaseTreeItem/index';

export type TreeItemElement = BaseTreeItemElement;

/** @internal */
export type TreeItemElementIntersection = BaseTreeItemElementIntersection;

export type TreeItemSlots = BaseTreeItemSlots & {
  /**
   * Expand icon slot,
   * by default renders a chevron icon to indicate opening and closing
   */
  expandIcon?: Slot<'span'>;
  /**
   * Icon slot that renders right before main content
   */
  beforeIcon?: Slot<'span'>;
  /**
   * Icon slot that renders right after main content
   */
  afterIcon?: Slot<'span'>;
};

/**
 * TreeItem Props
 */
export type TreeItemProps = ComponentProps<TreeItemSlots> & BaseTreeItemProps;

/**
 * State used in rendering TreeItem
 */
export type TreeItemState = ComponentState<TreeItemSlots>;
