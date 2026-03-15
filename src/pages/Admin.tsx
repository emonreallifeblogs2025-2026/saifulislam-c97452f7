import { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { useLanguage, Lang, translations } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, LogOut, Save, RotateCcw, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const langLabels: Record<string, string> = {
  bn: "বাংলা", en: "English", fr: "Français", ar: "العربية", de: "Deutsch", zh: "中文", ru: "Русский",
};

const sectionLabels: Record<string, string> = {
  hero: "🏠 Hero Section",
  nav: "🧭 Navigation",
  stats: "📊 Statistics",
  skills: "⚡ Skills",
  videos: "🎬 Videos",
  education: "🎓 Education",
  portfolio: "💼 Portfolio",
  articles: "📝 Articles",
  contact: "📧 Contact",
  footer: "🔻 Footer",
  music: "🎵 Music",
  skillCards: "🃏 Skill Cards",
  writings: "✍️ Writings",
};

// Default translations structure for reference
const defaultStructure: Record<string, string[]> = {
  nav: ["home", "about", "skills", "portfolio", "contact", "letsChat", "videos"],
  hero: ["name", "titles", "bio", "cta", "watchVideo", "myWritings", "hello", "im", "researcher", "writingsBtn"],
  stats: ["experience", "projects", "insights", "reviews", "clients", "longBio"],
  skills: ["title", "subtitle", "design", "development", "psychologyResearch", "writing", "cinematography", "musicComposition", "aiPrompt", "realLifeResearch", "contentCreation", "videoEditing"],
  videos: ["title", "subtitle", "myVideos", "views"],
  education: ["title", "eduTitle", "expTitle", "edu1", "edu1Year", "edu2", "edu2Year", "edu3", "edu3Year", "edu4", "edu4Year", "exp1", "exp1Year", "exp2", "exp2Year", "exp3", "exp3Year", "exp4", "exp4Year", "sectionLabel", "heading", "edu3Desc", "advancedResearch", "advancedResearchYear", "advancedResearchDesc", "edu4Desc", "exp1Role", "exp1Desc", "exp2Role", "exp2Desc", "experienceLabel"],
  portfolio: ["title", "subtitle", "p1", "p2", "p3", "p4", "p5", "p6"],
  articles: ["title", "subtitle"],
  contact: ["title", "subtitle", "name", "email", "message", "send", "success", "getInTouch", "contactDesc"],
  footer: ["rights", "madeWith"],
  music: ["label", "title", "subtitle", "listenMore"],
  skillCards: ["mySkill", "elevatedDesigns", "personalizedExp", "readMore", "s1Title", "s1Count", "s1Desc", "s2Title", "s2Count", "s2Desc", "s3Title", "s3Count", "s3Desc"],
  writings: ["goBack", "waitMore", "chapters", "author", "authorRole", "comingSoon"],
};

const LoginScreen = ({ onLogin }: { onLogin: (pw: string) => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
    setError(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="text-primary" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground text-sm mt-2">Enter password to manage content</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            placeholder="Enter password..."
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          {error && <p className="text-destructive text-sm">Incorrect password</p>}
          <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Login
          </button>
        </form>
        <Link to="/" className="flex items-center gap-2 justify-center mt-6 text-muted-foreground hover:text-primary text-sm transition-colors">
          <ArrowLeft size={14} /> Back to Website
        </Link>
      </div>
    </div>
  );
};

const Admin = () => {
  const { overrides, setOverride, resetAll, getOverride, isAdmin, login, logout } = useContent();
  const { t } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<Lang>("en");
  const [expandedSections, setExpandedSections] = useState<string[]>(["hero"]);
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  if (!isAdmin) {
    return <LoginScreen onLogin={(pw) => {
      if (!login(pw)) {
        toast.error("Wrong password!");
      }
    }} />;
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const getDisplayValue = (section: string, key: string) => {
    const override = getOverride(selectedLang, section, key);
    if (override !== undefined) return override;
    const defaults = (translations as any)[selectedLang];
    return defaults?.[section]?.[key] || "";
  };

  const handleSave = (section: string, key: string, value: string) => {
    setOverride(selectedLang, section, key, value);
    toast.success(`Saved: ${section}.${key}`);
  };

  const handleReset = () => {
    if (window.confirm("Reset ALL content overrides? This cannot be undone.")) {
      resetAll();
      setEditValues({});
      toast.success("All overrides cleared!");
    }
  };

  const fieldKey = (section: string, key: string) => `${selectedLang}-${section}-${key}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Back</span>
            </Link>
            <h1 className="text-lg font-bold text-foreground">📋 Content Manager</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleReset} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
              <RotateCcw size={13} /> Reset All
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Language Selector */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Edit Language</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(langLabels) as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setSelectedLang(l)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  selectedLang === l
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Override count */}
        {Object.keys(overrides).length > 0 && (
          <div className="mb-4 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary">
            ✏️ {Object.values(overrides).reduce((acc, lang) =>
              acc + Object.values(lang).reduce((a, sec) => a + Object.keys(sec).length, 0), 0
            )} content overrides active
          </div>
        )}

        {/* Sections */}
        <div className="space-y-3">
          {Object.entries(defaultStructure).map(([section, keys]) => (
            <div key={section} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm">{sectionLabels[section] || section}</span>
                <div className="flex items-center gap-2">
                  {overrides[selectedLang]?.[section] && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {Object.keys(overrides[selectedLang][section]).length} edits
                    </span>
                  )}
                  {expandedSections.includes(section) ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
                </div>
              </button>

              {expandedSections.includes(section) && (
                <div className="border-t border-border px-4 py-3 space-y-3">
                  {keys.map(key => {
                    const fk = fieldKey(section, key);
                    const currentValue = editValues[fk] ?? getDisplayValue(section, key);
                    const hasOverride = getOverride(selectedLang, section, key) !== undefined;

                    return (
                      <div key={key} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-muted-foreground">
                            {key}
                            {hasOverride && <span className="ml-1.5 text-primary">●</span>}
                          </label>
                        </div>
                        <div className="flex gap-2">
                          {currentValue.length > 80 ? (
                            <textarea
                              value={currentValue}
                              onChange={e => setEditValues({ ...editValues, [fk]: e.target.value })}
                              rows={3}
                              className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 resize-y"
                            />
                          ) : (
                            <input
                              type="text"
                              value={currentValue}
                              onChange={e => setEditValues({ ...editValues, [fk]: e.target.value })}
                              className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
                            />
                          )}
                          <button
                            onClick={() => handleSave(section, key, editValues[fk] ?? currentValue)}
                            className="px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            title="Save"
                          >
                            <Save size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
