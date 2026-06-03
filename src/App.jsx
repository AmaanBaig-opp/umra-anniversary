
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  // HOME PAGE
  if (page === "home") {
    return (
      <div
        style={{
          height: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #312e81 50%, #581c87 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            fontSize: "20px",
          }}
        >
          ✨
        </div>

        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "15%",
            fontSize: "18px",
          }}
        >
          ✨
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "15%",
            fontSize: "22px",
          }}
        >
          ✨
        </div>

        <div>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              textShadow:
                "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5)",
            }}
          >
            Our Story ❤️
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "600px",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            From strangers in an exam hall
            <br />
            to my favorite person in the world.
          </p>

          <button
            onClick={() => setPage("chapter1")}
            style={{
              padding: "15px 35px",
              borderRadius: "50px",
              border: "none",
              fontSize: "1.1rem",
              cursor: "pointer",
              background: "black",
              fontWeight: "bold",
            }}
          >
            Begin Our Journey →
          </button>
        </div>
      </div>
    );
  }

  // CHAPTER 1
  if (page === "chapter1") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            textAlign: "center",
            color: "#3b2f2f",
            background: "rgba(255,255,255,0.7)",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h3
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Chapter 1
          </h3>

          <h1
  style={{
    fontSize: "3rem",
    color: "#3b2f2f",
    marginBottom: "10px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  }}
>
            12 March 2020
          </h1>

          <p
            style={{
              fontStyle: "italic",
              color: "#7a6f63",
            }}
          >
            Every story begins when nobody expects it.
          </p>

          <hr />

          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: "1.8",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            A normal board examination.
            <br />
            A normal classroom.
            <br />
            A normal day.
            <br />
            <br />
            Or at least that's what I thought.
          </p>

          <hr />

          <button
            onClick={() => setPage("chapter2")}
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Next →
          </button>
        </div>
      </div>
    );
  }

  // CHAPTER 2
  if (page === "chapter2") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            color: "#3b2f2f",
            background: "rgba(255,255,255,0.7)",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h3
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Chapter 2
          </h3>

          <h1
  style={{
    fontSize: "3rem",
    color: "#3b2f2f",
    marginBottom: "10px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  }}
>
  The Unexpected Conversation
</h1>

          <p
            style={{
              fontStyle: "italic",
              color: "#7a6f63",
            }}
          >
            Sometimes the smallest conversations change our lives forever.
          </p>

          <hr />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              marginTop: "30px",
            }}
          >
            When the exam ended, I stayed back in the classroom.
            <br />
            <br />
            I was always a shy person, especially when it came to talking to
            girls.
            <br />
            <br />
            So I waited for everyone to leave before stepping outside.
            <br />
            <br />
            I thought she had already gone.
            <br />
            <br />
            But when I finally walked out of the exam hall, something
            unexpected happened.
            <br />
            <br />
            She was still there.
            <br />
            <br />
            Waiting.
            <br />
            <br />
            As soon as she saw me, she smiled and asked,
            <br />
            <br />
            <i>"How was your exam?"</i>
            <br />
            <br />
            At that moment, it felt like a simple conversation.
            <br />
            <br />
            I had no idea that this small interaction would become the
            beginning of the most beautiful story of my life.
          </p>

          <hr />

          <button
  onClick={() => setPage("chapter3")}
  style={{
    marginTop: "20px",
    padding: "12px 30px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
  }}
>
  Next →
</button>
        </div>
      </div>
    );
  }
// CHAPTER 3
if (page === "chapter3") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#3b2f2f",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 3
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          A Message I Never Expected
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          Some messages arrive at exactly the right time.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          More than a year had passed since our board examinations.
          <br />
          <br />
          Life moved on, and the exam hall became just another memory.
          <br />
          <br />
          I never thought I would hear from her again.
          <br />
          <br />
          Then, on 4 June 2021, something unexpected happened.
          <br />
          <br />
          A notification appeared on my Instagram.
          <br />
          <br />
          Umra had sent me a follow request.
          <br />
          <br />
          A few moments later, a message arrived.
          <br />
          <br />
          <i>"Hello Amaan, board exam roommate remember?"</i>
          <br />
          <br />
          I was surprised.
          <br />
          <br />
          And honestly, I was happy too.
          <br />
          <br />
          Without wasting a second, I replied,
          <br />
          <br />
          <i>"Yeah yeah, I got it."</i>
          <br />
          <br />
          What started as a simple conversation quickly became a daily routine.
          <br />
          <br />
          Neither of us knew it then, but this was the beginning of something truly special.
        </p>

        <hr />

        <button
  onClick={() => setPage("chapter4")}
  style={{
    marginTop: "20px",
    padding: "12px 30px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
  }}
>
  Next →
</button>
      </div>
    </div>
  );
}
// CHAPTER 4
if (page === "chapter4") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#3b2f2f",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 4
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          From Strangers to Best Friends
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          The best relationships often begin with friendship.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          What started as a simple Instagram conversation soon became a part of
          our daily lives.
          <br />
          <br />
          We talked every day.
          <br />
          <br />
          Good morning messages became late-night conversations.
          <br />
          <br />
          We shared stories, jokes, dreams, and even the smallest details of
          our day.
          <br />
          <br />
          Somehow, talking to each other felt effortless.
          <br />
          <br />
          Our vibes matched perfectly.
          <br />
          <br />
          The more we talked, the more comfortable we became.
          <br />
          <br />
          Before we realized it, we had become best friends.
          <br />
          <br />
          We could spend hours talking and still have more to say.
          <br />
          <br />
          Looking back now, I think this was the moment when our story truly
          began.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter5")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 5
if (page === "chapter5") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#3b2f2f",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 5
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          When Friendship Became Love
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          Some feelings grow so naturally that you don't notice them until they become impossible to ignore.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          The days kept passing.
          <br />
          <br />
          Our conversations became longer.
          <br />
          <br />
          Our bond became stronger.
          <br />
          <br />
          We shared our happiness, our worries, our dreams, and our fears.
          <br />
          <br />
          Somewhere along the way, friendship started turning into something deeper.
          <br />
          <br />
          It wasn't sudden.
          <br />
          <br />
          It wasn't dramatic.
          <br />
          <br />
          It happened slowly, one conversation at a time.
          <br />
          <br />
          We started missing each other whenever we didn't talk.
          <br />
          <br />
          We started caring about each other's happiness more than our own.
          <br />
          <br />
          And before we could even explain it, we both knew something had changed.
          <br />
          <br />
          The feelings were mutual.
          <br />
          <br />
          And one beautiful day, we finally shared those feelings with each other.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter6")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 6
if (page === "chapter6") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#3b2f2f",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 6
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          The Day We Became Us ❤️
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          Two hearts finally choosing each other.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          By now, our friendship had become something much deeper.
          <br />
          <br />
          Every conversation felt special.
          <br />
          <br />
          Every notification brought a smile.
          <br />
          <br />
          Every day felt incomplete without talking to each other.
          <br />
          <br />
          The feelings were no longer hidden.
          <br />
          <br />
          We both knew what our hearts were trying to say.
          <br />
          <br />
          And then came the beautiful moment when we stopped being
          just friends.
          <br />
          <br />
          We chose each other.
          <br />
          <br />
          Officially.
          <br />
          <br />
          From that day forward,
          our story wasn't about two strangers anymore.
          <br />
          <br />
          It became the story of
          <br />
          <br />
          <b>Amaan ❤️ Umra</b>
          <br />
          <br />
          A story that continues to grow every single day.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter7")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 7 - FIRST DATE
if (page === "chapter7") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#3b2f2f",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 7
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          Our First Date ❤️
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          A few hours that felt like a few minutes.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          There are moments in life that stay with you forever.
          <br />
          <br />
          Our first date was one of them.
          <br />
          <br />
          We met at a café,
          excited, nervous, and happy all at once.
          <br />
          <br />
          What was supposed to be just a simple meet-up
          turned into one of the most beautiful days of my life.
          <br />
          <br />
          We talked.
          <br />
          We laughed.
          <br />
          We shared stories.
          <br />
          <br />
          Nearly three hours passed.
          <br />
          <br />
          Yet somehow,
          it felt like only three minutes.
          <br />
          <br />
          Time simply disappeared whenever I was with you.
          <br />
          <br />
          And then came the moments I will never forget.
          <br />
          <br />
          Our first hug.
          <br />
          <br />
          The moment I finally held you close.
          <br />
          <br />
          And our first kiss.
          <br />
          <br />
          A moment so special that even today,
          remembering it brings a smile to my face.
          <br />
          <br />
          That day wasn't just our first date.
          <br />
          <br />
          It became one of the most beautiful memories
          in our entire story.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter8")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 8
if (page === "chapter8") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#433333",
          background: "rgba(255,255,255,0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Chapter 8
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            color: "#3b2f2f",
          }}
        >
          Miles Apart, Yet Always Together ❤️
        </h1>

        <p
          style={{
            fontStyle: "italic",
            color: "#7a6f63",
          }}
        >
          Distance tested us, but it never defeated us.
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            marginTop: "30px",
          }}
        >
          Loving someone is easy when they are beside you.
          <br />
          <br />
          The real challenge begins when life pulls you apart.
          <br />
          <br />
          There were days when I stayed in the hostel,
          far away from home.
          <br />
          <br />
          Days when all I wanted was one more conversation,
          one more smile,
          one more moment with you.
          <br />
          <br />
          Sometimes we were busy.
          <br />
          Sometimes life became overwhelming.
          <br />
          <br />
          Yet somehow,
          no matter how difficult the day was,
          hearing your voice always made everything better.
          <br />
          <br />
          There were moments when we missed each other deeply.
          <br />
          <br />
          Moments when the distance felt unfair.
          <br />
          <br />
          But every challenge taught us something important:
          <br />
          <br />
          Love is not measured by how close two people are.
          <br />
          <br />
          It is measured by how strongly they stay connected
          even when miles separate them.
          <br />
          <br />
          And through every busy day,
          every missed call,
          every difficult moment,
          we continued choosing each other.
          <br />
          <br />
          Again.
          <br />
          And again.
          <br />
          And again.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter9")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 9
// CHAPTER 9
if (page === "chapter9") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf6e3 0%, #f5e6ca 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#763434",
          background: "rgba(169, 32, 32, 0.7)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3>Chapter 9</h3>

        <h1>Our Favorite Memories ❤️</h1>

        <p>
          <i>The moments that became forever.</i>
        </p>

        <hr />

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
          }}
        >
          Over the years, we created countless memories.
          <br /><br />
          Late-night conversations.
          <br />
          Random jokes.
          <br />
          Silly arguments.
          <br />
          Endless laughter.
          <br /><br />
          Some moments were big.
          <br />
          Some were small.
          <br /><br />
          But every memory became precious because it was with you.
          <br /><br />
          Looking back now,
          I wouldn't change a single chapter.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter10")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 10
if (page === "chapter10") {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#fdf6e3 0%,#f5e6ca 100%)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"20px"
    }}>
      <div style={{
        maxWidth:"800px",
        textAlign:"center",
        background:"rgba(149, 30, 30, 0.7)",
        padding:"40px",
        borderRadius:"20px"
      }}>
        <h3>Chapter 10</h3>

        <h1>The Journey So Far ❤️</h1>

        <p><i>Five years of choosing each other.</i></p>

        <hr />

        <p style={{fontSize:"1.2rem", lineHeight:"1.9"}}>
          Five years passed.
          <br /><br />
          Life changed.
          <br />
          People changed.
          <br />
          Circumstances changed.
          <br /><br />
          Yet somehow,
          we remained together.
          <br /><br />
          Through every challenge,
          every misunderstanding,
          every difficult moment,
          we never stopped choosing each other.
          <br /><br />
          And that means everything.
        </p>

        <hr />

        <button
          onClick={() => setPage("chapter11")}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
// CHAPTER 11
if (page === "chapter11") {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#fdf6e3 0%,#f5e6ca 100%)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"20px"
    }}>
      <div style={{
        maxWidth:"800px",
        textAlign:"center",
        background:"rgba(174, 44, 32, 0.87)",
        padding:"40px",
        borderRadius:"20px"
      }}>
        <h3>Chapter 11</h3>

        <h1>Before The Last Page ❤️</h1>

        <p><i>One final message before the ending.</i></p>

        <hr />

        <p style={{fontSize:"1.2rem", lineHeight:"1.9"}}>
          If I could go back to that exam hall in 2020,
          knowing everything I know today...
          <br /><br />
          I would still choose the same seat.
          <br />
          I would still walk out that door.
          <br />
          I would still answer that first message.
          <br /><br />
          Because every road led to you.
          <br /><br />
          And meeting you remains one of the best things that ever happened to me.
        </p>

        <hr />

        <button
          onClick={() => setPage("final")}
        >
          Pre-Final Page ❤️
        </button>
      </div>
    </div>
  );
}
// Pre-FINAL PAGE
// FINAL PAGE
if (page === "final") {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #312e81 50%, #581c87 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          Happy Anniversary ❤️
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: "2",
          }}
        >
          Dear Umra,
          <br /><br />

          Thank you for every smile.
          <br />
          Thank you for every memory.
          <br />
          Thank you for every moment you've spent with me.
          <br /><br />

          From that unexpected meeting in an exam hall
          to four beautiful years together,
          every chapter became special because of you.
          <br /><br />

          No matter what happens,
          you will always be one of the most important people in my life.
          <br /><br />

          And if I had the chance to start this story again...
          <br />
          I would choose you every single time.
          <br /><br />

          ❤️ I Love You ❤️
          <br />
          Forever & Always
          <br /><br />

          — Amaan
        </p>

        <button
          onClick={() => setPage("home")}
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Read Again ↺
        </button>
      </div>
    </div>
  );
}
return null;
}
export default App;