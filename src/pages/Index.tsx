import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const philosophicalThoughts = [
    {
      title: "О сути бытия",
      content:
        "В лабиринтах существования мы ищем смысл, но находим лишь отражения собственных страхов...",
      author: "Размышления",
      tag: "Экзистенциализм",
    },
    {
      title: "Абсурд повседневности",
      content:
        "Каждый день мы встаём, чтобы повторить те же действия. В этой монотонности скрыта вся трагедия человека...",
      author: "Из дневника",
      tag: "Философия жизни",
    },
    {
      title: "Одиночество среди людей",
      content:
        "Самое глубокое одиночество — это одиночество в толпе, когда ты понимаешь пропасть между душами...",
      author: "Записки",
      tag: "Психология",
    },
  ];

  const stories = [
    {
      title: "Провал как учитель",
      excerpt:
        "История о том, как потеря работы стала началом нового понимания жизни...",
      readTime: "5 мин",
    },
    {
      title: "Встреча с пустотой",
      excerpt:
        "Когда все планы рушатся, остаётся только честность с самим собой...",
      readTime: "7 мин",
    },
    {
      title: "Принятие боли",
      excerpt:
        "Размышления о том, как страдание формирует характер и мудрость...",
      readTime: "4 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Философия существования</h1>
          <div className="flex gap-6">
            <a
              href="#philosophy"
              className="hover:text-accent transition-colors"
            >
              Философия
            </a>
            <a href="#stories" className="hover:text-accent transition-colors">
              Истории
            </a>
            <a
              href="#community"
              className="hover:text-accent transition-colors"
            >
              Сообщество
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/img/658d5277-2dfd-4f95-8c1f-471239b591ba.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-6xl font-light mb-6 leading-tight">
            Жизнь — это{" "}
            <span className="text-accent font-bold">сложная штука</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Пространство для честных размышлений о том, как мы проживаем свои
            дни, сталкиваемся с трудностями и ищем смысл в хаосе существования.
          </p>
          <Button size="lg" className="animate-float">
            <Icon name="BookOpen" className="mr-2" size={20} />
            Начать чтение
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Философские размышления</h3>
            <p className="text-muted-foreground text-lg">
              Глубокие мысли о природе человеческого существования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophicalThoughts.map((thought, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{thought.tag}</Badge>
                    <Icon name="Brain" size={20} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{thought.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {thought.content}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    — {thought.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Истории преодоления</h3>
            <p className="text-muted-foreground text-lg">
              Личный опыт столкновения с жизненными трудностями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-muted-foreground">
                      {story.readTime}
                    </span>
                    <Icon
                      name="Heart"
                      size={16}
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {story.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto">
                    Читать далее{" "}
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Сообщество</h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Место для тех, кто не боится честно говорить о сложностях жизни и
            искать поддержку в понимающих людях.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageCircle" className="mr-3" size={24} />
                  Обсуждения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Делитесь мыслями и находите единомышленников в безопасном
                  пространстве
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" className="mr-3" size={24} />
                  Поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Получайте понимание от людей с похожим опытом и взглядом на
                  жизнь
                </p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg">
            <Icon name="UserPlus" className="mr-2" size={20} />
            Присоединиться к сообществу
          </Button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-3xl font-light italic text-accent mb-6 leading-relaxed">
            "Жизнь не о том, чтобы найти себя. Жизнь о том, чтобы создать себя."
          </blockquote>
          <p className="text-muted-foreground">
            — Размышления о смысле существования
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted py-8 px-6 text-center">
        <p className="text-muted-foreground">
          © 2024 Философия существования. Место для честных размышлений о
          жизни.
        </p>
      </footer>
    </div>
  );
};

export default Index;
