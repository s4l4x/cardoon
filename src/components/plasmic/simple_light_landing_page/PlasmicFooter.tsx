// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gLkFRkpLTqpCFkXotyua58
// Component: tMQhX3kMcRs9A
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
import IconLink from "../../IconLink"; // plasmic-import: R-SUhlZk9FMcA/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BZKRHDJArEULBm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: gLkFRkpLTqpCFkXotyua58/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: tMQhX3kMcRs9A/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: Msv6deJ5W4aphb/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: wz0Ungmxu74NgH/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: iXEL3dlQyHhxXE/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: j05_8mPoaoLjsL/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__hjWs)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__mky1S)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__doRv)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__qn990)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg__mjD0P)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.box__m8DRq)}>
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__okiy8
              )}
              href={"#" as const}
            >
              {"Terms"}
            </a>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___5UN0
              )}
            >
              {" · "}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__v3VxG
              )}
              href={"#" as const}
            >
              {"Privacy"}
            </a>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__cfQ8)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__xNqw4)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__nVap2
              )}
            >
              {"Products"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__didsr
              )}
              href={"#" as const}
            >
              {"Web Studio"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___5Dea
              )}
              href={"#" as const}
            >
              {"DynamicBox Flex"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__emCsm
              )}
              href={"#" as const}
            >
              {"Programming Forms"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__hr5Sb
              )}
              href={"#" as const}
            >
              {"Integrations"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8RvSt
              )}
              href={"#" as const}
            >
              {"Command-line"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__mwHij)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__ymePj
              )}
            >
              {"Resources"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__bjpBs
              )}
              href={"#" as const}
            >
              {"Documentation"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__lZloQ
              )}
              href={"#" as const}
            >
              {"Tutorials & Guides"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___7CpZu
              )}
              href={"#" as const}
            >
              {"Blog"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__wB4Fu
              )}
              href={"#" as const}
            >
              {"Support Center"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___0Gm7U
              )}
              href={"#" as const}
            >
              {"Partners"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__s8Skk)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__csUcP
              )}
            >
              {"Company"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dP6W
              )}
              href={"#" as const}
            >
              {"Home"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__iB1WJ
              )}
              href={"#" as const}
            >
              {"About us"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8FZno
              )}
              href={"#" as const}
            >
              {"Company values"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___7Y2Fb
              )}
              href={"#" as const}
            >
              {"Pricing"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__nmbx4
              )}
              href={"#" as const}
            >
              {"Privacy policy"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__dhVna)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__vkFy
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__zx2Pn
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.box__ohDvd)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.button
                )}
              >
                {">"}
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__g2AK)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__ptHrT)}
      >
        <div className={classNames(defaultcss.all, sty.box__i24Dv)}>
          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link___6R3B9
            )}
            href={"https://cruip.com/" as const}
          >
            {"Designed by Cruip. "}
          </a>

          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link___36Tmb
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Built in Plasmic. "}
          </a>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__fcFkd
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___76HaR)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__hfRLk)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__bEq6E)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__njRQg)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg__dnVp5)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink___16D3B)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg__qQe7D)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
