import type { DeepStringify } from "~/utils/server/string";

const dictionary = {
  general: {
    tools: "функції",
    pricing: "ціни",
    about: "про нас"
  },
  islands: {
    navbar: {
      pricing: {
        "toast.title": "Це безкоштовно! 😜",
        "toast.description":
          "Цей проєкт є відкритим джерелом і безкоштовним для використання. 🥳"
      },
      links: {
        github: "Мій профіль на GitHub",
        twitter: "Мій профіль у Twitter"
      },
      search: "Пошук...",
      "search.placeholder": "Введіть команду або пошук",
      main: {
        tools: "функції",
        about: "про нас",
        github: "github",
        twitter: "twitter"
      },
      command: {
        tools: "Функції",
        theme: "Тема",
        light: "Світла",
        dark: "Темна",
        system: "Системна"
      }
    },
    footer: "Розроблено {author}. Вихідний код доступний на {github}.",
    toast: {
      success: "Успіх",
      error: "Помилка",
      warning: "Попередження"
    },
    "copy-button": {
      copy: "Скопіювати в буфер",
      copied: "Скопійовано в буфер!"
    }
  },
  pages: {
    "not-found": {
      title: "Сторінку не знайдено",
      description:
        "Ресурс, який ви шукаєте, може бути переміщено або не є частиною Bleverse Reliverse. Перевірте URL або перегляньте інші розділи.",
      "go-home": "Домашня сторінка"
    },
    home: {
      title:
        "Відкрийте для себе найкращі {tools} для React, Next.js та інших. Створено спеціально для вас.",
      subtitle:
        "Bleverse Reliverse спрощує ваш розвиток. Почніть з вбудованих функцій, оптимізованих для сучасної веб-розробки.",
      "get-started": "Почати роботу",
      features: {
        title: "Основні можливості Reliverse",
        subtitle:
          "Від коду до дизайну, Reliverse надає функції, які значно покращують ваші веб-проєкти.",
        cryptography: {
          title: "Next.js 13",
          description:
            "Працюйте з App dir, маршрутизацією, макетами, завантаженням інтерфейсу, API маршрутами та іншим."
        },
        text: {
          title: "React 18",
          description:
            "Маніпулюйте додатком легко з серверними та клієнтськими компонентами. Використовуйте hook. Та багато іншого."
        },
        clock: {
          title: "База даних",
          description:
            "Слідкуйте за своїм прогресом з ORM, використовуючи Drizzle або Prisma на ваш вибір. Розгортання на Vercel, Railway, PlanetScale тощо."
        },
        currency: {
          title: "Компоненти",
          description:
            "Компоненти користувацького інтерфейсу, створені за допомогою Radix UI та стилізовані за допомогою Tailwind CSS."
        },
        files: {
          title: "Аутентифікація",
          description:
            "Проміжне програмне забезпечення для аутентифікації за допомогою Clerk, Auth.js або Lucia."
        },
        devtools: {
          title: "Підписки",
          description: "Безкоштовні та платні підписки за допомогою Stripe."
        }
      },
      "open-source": {
        title: "Підтримка відкритого коду",
        subtitle: {
          first:
            "Bleverse Reliverse підтримує дух відкритого коду та заохочує до співпраці над кодом.",
          second: "Досліджуйте наш код на"
        },
        "stars#one": "[GitHub]: Цей проєкт має лише одну зіроньку... 😢",
        "stars#few": "[GitHub]: Цей проєкт вже має аж {count} зіроньки! 😍",
        "stars#other": "[GitHub]: Цей проєкт вже має аж {count} зіроньки! 😍"
      }
    },
    about: {
      title: "Про нас",
      subtitle:
        "Bleverse Reliverse - це потужний стартовий пакет для Next.js TypeScript Tailwind. Він оптимізує процес розробки та забезпечує міцну основу для створення веб-проектів. Відчувайте себе вільно використовувати, адаптувати та вносити свій вклад у проект, натиснувши {link}.",
      "subtitle.link": "тут",
      credits: {
        title: "Подяки",
        topics: {
          nextjs: "За веб-фреймворк на базі React.",
          typescript: "За безпечний за типами JavaScript.",
          tailwind: "За неймовірне спрощення нашого CSS життя.",
          "radix-ui": "За чудові примітиви.",
          "shadcn/ui": "За шикарні компоненти.",
          lucide: "За круті іконки.",
          vercel: "За деплой усіх моїх проєктів."
        }
      },
      author: "Ліцензія"
    },
    tools: {
      title: "Функції",
      todo: {
        title: "Список завдань",
        placeholder: "Додати нове завдання",
        actions: {
          create: "Створити нове завдання",
          delete: "Видалити завдання"
        }
      }
    }
  }
} as const;

export type Dictionary = DeepStringify<typeof dictionary>;

export default dictionary;