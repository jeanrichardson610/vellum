import * as React from "react";
import { gsap } from "gsap";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/card";
import { Badge } from "@/components/badge";
import { Input } from "@/components/input";
import { Slider } from "@/components/slider";
import { Switch } from "@/components/switch";
import { Bell, Search } from "lucide-react";

const accents = [
  { name: "Signal violet", value: "#6c5ce7", hover: "#5a47d6" },
  { name: "Ember", value: "#ff6b4a", hover: "#e85535" },
  { name: "Success teal", value: "#16a38a", hover: "#0d7a66" },
  { name: "Ink", value: "#2b2e3b", hover: "#12131a" },
];

/**
 * The system's signature element: scrub the actual design tokens — radius,
 * density, accent — and watch every real component on the page respond,
 * live, because they're all reading the same CSS variables. On mount, a
 * short GSAP sequence draws the eye through the panel in reading order.
 */
export function TokenPlayground() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [radius, setRadius] = React.useState(10);
  const [density, setDensity] = React.useState(1);
  const [accentIndex, setAccentIndex] = React.useState(0);
  const accent = accents[accentIndex] ?? accents[0]!;

  React.useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-reveal='controls']", { opacity: 0, y: 14, duration: 0.5 })
        .from(
          "[data-reveal='card']",
          { opacity: 0, y: 24, scale: 0.96, duration: 0.55, stagger: 0.08 },
          "-=0.25"
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const style = {
    "--radius-sm": `${radius * 0.6}px`,
    "--radius-md": `${radius}px`,
    "--radius-lg": `${radius * 1.6}px`,
    "--radius-xl": `${radius * 2.4}px`,
    "--color-primary-500": accent.value,
    "--color-primary-600": accent.hover,
    "--color-primary-solid": accent.value,
    "--color-primary-solid-hover": accent.hover,
    padding: `${16 * density}px`,
    gap: `${16 * density}px`,
  } as React.CSSProperties;

  return (
    <div ref={rootRef} className="flex flex-col gap-8" style={{ width: 880 }}>
      <div data-reveal="controls" className="flex flex-col gap-6 rounded-[var(--radius-lg)] border border-ink-100 bg-paper-0 p-6 shadow-[var(--shadow-sm)]">
        <div>
          <h2 className="font-display text-heading-md text-ink-950">Token Playground</h2>
          <p className="mt-1 text-body-sm text-ink-600">
            These aren&apos;t mock controls — they write straight into the same CSS variables every
            component reads. Nothing below is a screenshot.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-medium text-ink-950">Radius</span>
              <span className="font-mono text-mono-sm text-ink-400">{radius}px</span>
            </div>
            <Slider value={[radius]} onValueChange={([v]) => v !== undefined && setRadius(v)} min={0} max={24} step={1} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-medium text-ink-950">Density</span>
              <span className="font-mono text-mono-sm text-ink-400">{density.toFixed(1)}×</span>
            </div>
            <Slider value={[density]} onValueChange={([v]) => v !== undefined && setDensity(v)} min={0.5} max={2} step={0.1} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-body-sm font-medium text-ink-950">Accent</span>
            <div className="flex gap-2">
              {accents.map((a, i) => (
                <button
                  key={a.name}
                  aria-label={a.name}
                  onClick={() => setAccentIndex(i)}
                  className="size-7 rounded-full border-2 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: a.value,
                    borderColor: i === accentIndex ? a.value : "transparent",
                    outline: i === accentIndex ? `2px solid ${a.value}` : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={style} className="grid grid-cols-1 rounded-[var(--radius-lg)] border border-dashed border-ink-200 sm:grid-cols-2">
        <div data-reveal="card">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Notification settings</CardTitle>
                <Badge variant="primary">New</Badge>
              </div>
              <CardDescription>Every value here is live-bound to the sliders above.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input leadingIcon={<Search className="size-4" />} placeholder="Search settings" />
              <label className="flex items-center justify-between text-body-sm text-ink-950">
                <span className="flex items-center gap-2"><Bell className="size-4 text-ink-400" /> Push notifications</span>
                <Switch defaultChecked />
              </label>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
        <div data-reveal="card" className="flex flex-col justify-center gap-3 p-6">
          <p className="text-body-sm text-ink-600">
            Radius, spacing, and accent are drawn from three variables:
            <code className="ml-1 font-mono text-mono-sm text-ink-950">--radius-md</code>,
            <code className="ml-1 font-mono text-mono-sm text-ink-950">gap</code>, and
            <code className="ml-1 font-mono text-mono-sm text-ink-950">--color-primary-solid</code>.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
            <Button size="sm" variant="ghost">Ghost</Button>
          </div>
        </div>
      </div>
    </div>
  );
}