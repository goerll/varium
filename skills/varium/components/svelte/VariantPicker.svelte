<script lang="ts">
  import { onMount } from 'svelte';
  import type { VariantPickerProps } from './types';

  let { variants, slot, defaultVariant }: VariantPickerProps = $props();

  const OVERLAY_STYLES = `
    .varium-shell {
      position: relative;
    }

    .varium-stage {
      position: relative;
    }

    .varium-layer {
      transition: opacity 150ms ease;
    }

    .varium-layer--enter {
      opacity: 1;
    }

    .varium-layer--exit {
      position: absolute;
      inset: 0;
      opacity: 0;
      pointer-events: none;
    }

    .varium-overlay {
      position: fixed;
      left: 50%;
      bottom: max(20px, env(safe-area-inset-bottom, 0px) + 12px);
      z-index: 2147483647;
      max-width: calc(100vw - 20px);
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.96);
      font-family:
        "SF Pro Display",
        "Segoe UI",
        "Helvetica Neue",
        Arial,
        sans-serif;
    }

    .varium-pill {
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(34, 34, 34, 0.72);
      box-shadow:
        0 18px 60px rgba(0, 0, 0, 0.42),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(16px) saturate(140%);
      -webkit-backdrop-filter: blur(16px) saturate(140%);
      position: relative;
      border-radius: 16px;
    }

    .varium-status {
      position: absolute;
      left: 50%;
      bottom: calc(100% + 10px);
      transform: translateX(-50%) translateY(6px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      padding: 7px 10px;
      background: rgba(18, 18, 18, 0.92);
      color: rgba(255, 255, 255, 0.72);
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition:
        opacity 150ms ease,
        transform 150ms ease;
    }

    .varium-status[data-visible="true"] {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .varium-overlay__inner {
      display: grid;
      grid-template-columns: 36px 1px 152px 1px 36px;
      align-items: center;
      min-height: 44px;
      overflow: hidden;
      border-radius: inherit;
    }

    .varium-divider {
      width: 1px;
      height: 22px;
      background: rgba(255, 255, 255, 0.1);
    }

    .varium-arrow,
    .varium-label {
      appearance: none;
      border: 0;
      background: transparent;
      color: rgba(255, 255, 255, 0.72);
      height: 100%;
      width: 100%;
      cursor: pointer;
      transition:
        color 150ms ease,
        background-color 150ms ease,
        transform 150ms ease;
      font: inherit;
    }

    .varium-arrow {
      display: grid;
      place-items: center;
      font-size: 15px;
      line-height: 1;
    }

    .varium-label {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 152px;
      min-width: 152px;
      max-width: 152px;
      padding: 0 12px;
      text-align: left;
      position: relative;
    }

    .varium-arrow:hover,
    .varium-label:hover {
      color: rgba(255, 255, 255, 0.96);
      background: rgba(255, 255, 255, 0.05);
    }

    .varium-arrow:active,
    .varium-label:active {
      transform: translateY(1px);
    }

    .varium-arrow:focus-visible,
    .varium-label:focus-visible {
      outline: 2px solid rgba(149, 241, 255, 0.92);
      outline-offset: 2px;
    }

    .varium-counter {
      flex: 0 0 auto;
      color: rgba(255, 255, 255, 0.44);
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.01em;
    }

    .varium-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
      flex: 1 1 auto;
    }

    .varium-title {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(255, 255, 255, 0.96);
      font-size: 13px;
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .varium-chevrons {
      flex: 0 0 auto;
      display: inline-grid;
      gap: 2px;
      color: rgba(255, 255, 255, 0.28);
      justify-items: center;
    }

    .varium-chevron {
      display: block;
      width: 9px;
      height: 9px;
    }

    .varium-chevron path {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .varium-menu {
      position: absolute;
      left: 37px;
      bottom: calc(100% + 8px);
      width: 152px;
      padding: 6px;
      overflow: hidden;
      isolation: isolate;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      background: rgba(34, 34, 34, 0.86);
      box-shadow:
        0 18px 60px rgba(0, 0, 0, 0.42),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(26px) saturate(155%);
      -webkit-backdrop-filter: blur(26px) saturate(155%);
    }

    .varium-menu__list {
      display: grid;
      gap: 2px;
    }

    .varium-menu__item {
      appearance: none;
      border: 0;
      width: 100%;
      border-radius: 10px;
      background: transparent;
      color: rgba(255, 255, 255, 0.78);
      padding: 9px 10px;
      text-align: left;
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      transition:
        background-color 150ms ease,
        color 150ms ease;
    }

    .varium-menu__item:hover {
      background: rgba(255, 255, 255, 0.06);
      color: rgba(255, 255, 255, 0.96);
    }

    .varium-menu__item[data-active="true"] {
      background: rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 1);
    }

    @media (max-width: 720px) {
      .varium-overlay {
        max-width: calc(100vw - 20px);
      }

      .varium-overlay__inner {
        grid-template-columns: 34px 1px 136px 1px 34px;
        min-height: 42px;
      }

      .varium-label {
        width: 136px;
        min-width: 136px;
        max-width: 136px;
        padding: 0 11px;
      }

      .varium-menu {
        left: 35px;
        width: 136px;
      }
    }
  `;

  let names = $derived(Object.keys(variants));
  let initialVariant = $derived(
    defaultVariant && variants[defaultVariant] ? defaultVariant : names[0]
  );

  let active = $state<string>(initialVariant ?? '');
  let displayed = $state<string>(initialVariant ?? '');
  let outgoing = $state<string | null>(null);
  let isEntering = $state<boolean>(true);
  let menuOpen = $state<boolean>(false);
  let pillRef = $state<HTMLDivElement | null>(null);

  let activeIndex = $derived(names.indexOf(displayed));

  function setVariantByOffset(offset: number) {
    if (names.length <= 1) return;
    const nextIndex = (activeIndex + offset + names.length) % names.length;
    active = names[nextIndex];
    menuOpen = false;
  }

  function selectVariant(name: string) {
    active = name;
    menuOpen = false;
  }

  $effect(() => {
    if (!variants[active]) {
      active = names[0];
      displayed = names[0];
      outgoing = null;
      return;
    }

    if (active === displayed) {
      isEntering = true;
      return;
    }

    outgoing = displayed;
    displayed = active;
    isEntering = false;

    const frame = requestAnimationFrame(() => {
      isEntering = true;
    });
    const timeout = setTimeout(() => {
      outgoing = null;
    }, 170);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  });

  $effect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!pillRef?.contains(event.target as Node)) {
        menuOpen = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        menuOpen = false;
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<div class="varium-shell">
  <style>{OVERLAY_STYLES}</style>

  <div class="varium-stage" aria-live="polite">
    {#if outgoing}
      <div class="varium-layer varium-layer--exit" aria-hidden="true">
        {@render variants[outgoing]?.()}
      </div>
    {/if}

    <div class="varium-layer {isEntering ? 'varium-layer--enter' : ''}">
      {@render variants[displayed]?.()}
    </div>
  </div>

  <div class="varium-overlay" role="region" aria-label="Varium picker for {slot}">
    <div class="varium-pill" bind:this={pillRef}>
      {#if menuOpen}
        <div class="varium-menu" role="listbox" aria-label="{slot} variants">
          <div class="varium-menu__list">
            {#each names as name}
              <button
                type="button"
                class="varium-menu__item"
                data-active={displayed === name}
                onclick={() => selectVariant(name)}
              >
                {name}
              </button>
            {/each}
          </div>
        </div>
      {/if}

      <div class="varium-overlay__inner">
        <button
          type="button"
          class="varium-arrow"
          aria-label="Previous {slot} variant"
          onclick={() => setVariantByOffset(-1)}
        >
          &#8249;
        </button>

        <div class="varium-divider" aria-hidden="true"></div>

        <button
          type="button"
          class="varium-label"
          aria-label="Choose {slot} variant"
          aria-expanded={menuOpen}
          aria-haspopup="listbox"
          onclick={() => menuOpen = !menuOpen}
        >
          <span class="varium-counter">{activeIndex + 1}/{names.length}</span>
          <span class="varium-title-row">
            <span class="varium-title">{displayed}</span>
            <span class="varium-chevrons" aria-hidden="true">
              <svg class="varium-chevron" viewBox="0 0 10 10">
                <path d="M2 6.25 5 3.25l3 3" />
              </svg>
              <svg class="varium-chevron" viewBox="0 0 10 10">
                <path d="M2 3.75 5 6.75l3-3" />
              </svg>
            </span>
          </span>
        </button>

        <div class="varium-divider" aria-hidden="true"></div>

        <button
          type="button"
          class="varium-arrow"
          aria-label="Next {slot} variant"
          onclick={() => setVariantByOffset(1)}
        >
          &#8250;
        </button>
      </div>
    </div>
  </div>
</div>
