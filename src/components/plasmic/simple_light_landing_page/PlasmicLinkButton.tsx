// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gLkFRkpLTqpCFkXotyua58
// Component: 6Xc9IWJN5N67i
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: gLkFRkpLTqpCFkXotyua58/projectcss
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: 6Xc9IWJN5N67i/css

export type PlasmicLinkButton__VariantMembers = {
  type: "solidBlue" | "solidBlack" | "outlineBlue" | "small";
};

export type PlasmicLinkButton__VariantsArgs = {
  type?: SingleChoiceArg<"solidBlue" | "solidBlack" | "outlineBlue" | "small">;
};

type VariantPropType = keyof PlasmicLinkButton__VariantsArgs;
export const PlasmicLinkButton__VariantProps = new Array<VariantPropType>(
  "type"
);

export type PlasmicLinkButton__ArgsType = {
  text?: React.ReactNode;
  href?: string | PageHref;
};

type ArgPropType = keyof PlasmicLinkButton__ArgsType;
export const PlasmicLinkButton__ArgProps = new Array<ArgPropType>(
  "text",
  "href"
);

export type PlasmicLinkButton__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultLinkButtonProps {
  text?: React.ReactNode;
  href?: string | PageHref;
  type?: SingleChoiceArg<"solidBlue" | "solidBlack" | "outlineBlue" | "small">;
  className?: string;
}

function PlasmicLinkButton__RenderFunc(props: {
  variants: PlasmicLinkButton__VariantsArgs;
  args: PlasmicLinkButton__ArgsType;
  overrides: PlasmicLinkButton__OverridesType;
  dataFetches?: PlasmicLinkButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__type_outlineBlue]: hasVariant(
          variants,
          "type",
          "outlineBlue"
        ),
        [sty.root__type_small]: hasVariant(variants, "type", "small"),
        [sty.root__type_solidBlack]: hasVariant(variants, "type", "solidBlack"),
        [sty.root__type_solidBlue]: hasVariant(variants, "type", "solidBlue")
      })}
      href={args.href !== undefined ? args.href : "#"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotText, {
          [sty.slotText__type_outlineBlue]: hasVariant(
            variants,
            "type",
            "outlineBlue"
          ),
          [sty.slotText__type_solidBlack]: hasVariant(
            variants,
            "type",
            "solidBlack"
          ),
          [sty.slotText__type_solidBlue]: hasVariant(
            variants,
            "type",
            "solidBlue"
          )
        })
      })}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinkButton__VariantsArgs;
    args?: PlasmicLinkButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLinkButton__Fetches;
  } & Omit<PlasmicLinkButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLinkButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
