/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import type { AzureAccountTreeItemWithProjects } from './app/tree/AzureAccountTreeItemWithProjects';
import { func } from './constants';
import type { AzExtTreeDataProvider, AzExtTreeItem, IAzExtOutputChannel } from '@microsoft/vscode-azext-utils';
import type * as cp from 'child_process';
import type { ExtensionContext, TreeView, WebviewPanel } from 'vscode';

/**
 * Namespace for common variables used throughout the extension. They must be initialized in the activate() method of extension.ts
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ext {
  export let context: ExtensionContext;
  export let workflowDesignTimePort: number;
  export let workflowDesignChildProcess: cp.ChildProcess | undefined;
  export let outputChannel: IAzExtOutputChannel;
  export const prefix = 'logicAppsExtension';

  // Tree item view
  export let azureAccountTreeItem: AzureAccountTreeItemWithProjects;
  export let tree: AzExtTreeDataProvider;
  export let treeView: TreeView<AzExtTreeItem>;
  export const treeViewName = 'newAzLogicApps';
  export let deploymentFolderPath: string;

  // Functions
  export const funcCliPath: string = func;

  // WebViews
  export enum webViewKey {
    designerLocal = 'designerLocal',
  }
  export const openWebviewPanels: Record<string, Record<string, WebviewPanel>> = {
    [webViewKey.designerLocal]: {},
  };
}