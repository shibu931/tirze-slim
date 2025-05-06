import Image from "next/image";
import { Link } from '@/i18n/navigation';
import { getLocale, getTranslations } from "next-intl/server";
import ShopPage from "@/components/ShopPage/ShopPage";
import { HomeCarousel } from "@/components/Homepage/Carousel";

export default async function Home() {
  const locale = await getLocale()
  const t = await getTranslations('HomePage');
  return (<>
    <main>
      <section className="">
        <div className="relative mx-auto banner-img">
          <div className="absolute w-full md:w-2/4 left-1/2 -translate-x-[50%] translate-y-[60%] z-10 banner-text text-center">
            <h1 className="text-center font-bold md:font-extrabold text-xl sm:text-2xl md:text-4xl uppercase text-white tracking-wider w-full">{t('title')}</h1>
            <Link className="rounded-full inline-block mt-4 text-white  px-4 py-2 font-semibold hover:cursor-pointer shadow-lg shadow-neutral-900/25 transition-all duration-200 hover:-translate-y-1 bg-rose-500 hover:bg-rose-600" href="/shop">
              {t('banner_btn')}
            </Link>
          </div>
          <HomeCarousel />
        </div>
      </section>
      <ShopPage />

      {
        locale === 'en' ? 
        (
          <div className="article">
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Who we are and why we exist</h2>
            <p>In a world where losing weight seems increasingly complicated and full of judgments, we have chosen a different path. We are not here to promise miracles, nor to sell illusions. We are here because we know how frustrating it can be to try everything - diets, supplements, hours in the gym - without being able to achieve lasting results. Because we have been there, too. And we have understood that, sometimes, you need extra support. But it has to be true, serious, safe.</p>
            <p>Our shop was created for this: to finally make accessible new-generation, clinically tested pharmacological treatments, which until yesterday were only available by prescription and only after long medical courses. We want those who are ready to take care of themselves to be able to do so independently, with effective, transparent tools and delivered confidentially.</p>
            <p>We are not talking about shortcuts, but about real possibilities. We are talking about drugs such as Semaglutide, Retatrutide, Tirzepatide and the combination SEMA + CAGRI, which do not suppress hunger by force, but help the body to find its natural signals of hunger and satiety. Therapies designed to accompany those who want to lose weight without extreme restrictions, without a sense of guilt, without having to justify themselves to anyone.</p>
            <h3 className="mt-6">We are addressing those who have already understood that willpower is not enough</h3>
            <p>We know that many people have been living with a complicated relationship with food for years. Which is not a question of laziness, but of hormonal imbalances, emotional hunger, ingrained habits. This is why we do not judge and we do not promise the impossible. We only offer a new opportunity: that of starting a journey with quality products, authentic, traceable, rigorously selected and delivered with discretion.</p>
            <p>Our goal is simple: to restore autonomy and confidence. We want every person who enters this space to feel welcomed, informed, and above all free. Free to choose whether to start today, or in a month. Free to understand what really works for your body, without having to go to doctors if you don't want to. Free to find your balance again, step by step.</p>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>What we offer: new generation treatments</h2>
            <p>In our shop you will not find over-the-counter diet pills or unfounded supplements. What we offer is a selection of clinically tested drugs, designed to act in depth on the hormonal mechanisms that regulate hunger, satiety and metabolism. They are treatments designed for those who are tired of unsuccessful attempts and are finally looking for a concrete, safe and scientifically supported solution.</p>
            <p>We have carefully chosen each product, evaluating the real effectiveness, tolerability and certified quality of the supply. We do not work with dubious intermediaries or makeshift warehouses. What we offer is what we ourselves would like to find: serious, verifiable products, capable of making a difference over time, without impositions or unreal promises.</p>
            <div className="space-y-4 mt-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner_1.jpg"
                    alt="Semaglutide"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
                <div className="col-span-8">
                  <h3>Semaglutide: to regulate hunger and metabolism with balance</h3>
                  <p>Semaglutide is one of the most advanced weight management treatments available today. It works on GLP-1 receptors, helping to reduce appetite and improve glycemic control, without having to count calories or live with restriction. We offer it in different dosages, to allow for a gradual approach, built on the real needs of the body.</p>
                  <p>It is ideal for those who want to lose weight physiologically, without shocks or invasive side effects. Many of our customers start right here.</p>
                </div>
  
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-8">
                  <h3>Retatrutide: The triple treatment that looks to the future</h3>
                  <p>Retatrutide 4 mg represents the new frontier in weight control. It is a triple action agonist that simultaneously stimulates the GLP-1, GIP and glucagon receptors. This means a more complete regulation of appetite, greater metabolic efficiency and a natural stimulation of energy consumption.</p>
                  <p>This is the treatment we recommend for those who have already tried traditional GLP-1 therapies and want broader support, without increasing complexity.</p>
                </div>
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner_3.jpg"
                    alt="Semaglutide"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner.jpg"
                    alt="SEMA + CAGRI: Double Action, Less Hunger and More Control"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
                <div className="col-span-8">
                  <h3>SEMA + CAGRI: Double Action, Less Hunger and More Control</h3>
                  <p>The combination of Semaglutide and Cagrilintide is one of the most interesting among the new proposals. Two active ingredients that act in synergy: one stimulates rapid satiety, the other maintains it over time. The result? Smaller portions, less desire for snacks, fewer obsessive thoughts about food.</p>
                  <p>It is a suitable solution for those who need a more precise hormonal intervention, but want to avoid drastic effects.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-8">
                  <h3>Tirzepatide: GLP-1 + GIP Innovation for a Powerful but Sustainable Strategy</h3>
                  <p>Tirzepatide combines two mechanisms: GLP-1 and GIP. It is a powerful treatment, often recommended in clinical settings for those with resistant obesity or slow metabolism. In our shop it is available without a prescription, for those who want to face change responsibly but without barriers.</p>
                  <p>We recommend it to those who already have experience with GLP-1 analogues and want to move on to an even more complete treatment.</p>
                </div>
                <div className="col-span-4">
                  {/* <Image/> */}
                </div>
              </div>
            </div>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Why choose these products to lose weight?</h2>
            <p>We have learned the hard way that losing weight is not just a matter of willpower. It is not even a matter of calories, drastic diets or hours at the gym. The problem goes deeper, and concerns how our body regulates appetite, emotional hunger, sugar metabolism and fat accumulation. And this is where these treatments really make a difference.</p>
            <p>The products we offer are not palliatives. They are the result of years of clinical studies and controlled trials. They are targeted hormonal tools, designed to restore the internal balance between hunger and satiety, between what we eat and what we consume, between the desire for food and the real need for nourishment.</p>
  
            <h3>They act where needed: in the heart of the metabolic system</h3>
            <p>Semaglutide, Retatrutide, Tirzepatide, SEMA+CAGRI do more than just suppress hunger. They act on specific receptors (GLP-1, GIP, amylin, glucagon) that regulate eating behavior and energy management. This means they help to:</p>
            <ul>
              <li>Feel full sooner with smaller portions</li>
              <li>Prolong satiety after meals.</li>
              <li>Reduce sugar cravings and impulse snacking</li>
              <li>Improve glycemic control, avoiding spikes and crashes.</li>
              <li>Increase the use of fat reserves, naturally.</li>
            </ul>
            <p>We're not talking about forced weight loss or 800 calorie a day diets. We're talking about reprogramming your body to function better, without punishment or extreme sacrifices.</p>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>They help us free ourselves from the constant thought of food</h2>
            <p>One of the most appreciated effects by those who use these treatments is the feeling of mental freedom. For the first time, we can go through a day without constantly thinking about what to eat, how to compensate, how much we did wrong. Hunger loses power. Food goes back to being nourishment, pleasure, but not obsession.</p>
            <p>It is a transformation that also has consequences on the emotional level. We sleep better. We have more energy. We feel more stable. And, above all, we take back our day without the constant burden of control.</p>
          </section>
  
          <section className="pt-4 sm:pt-6 md:pt-8 lg:pt-12">
            <h2>They are sustainable over time and adapt to our real life</h2>
            <p>These products do not require you to change your life. They do not force you to follow rigid rules or give up everything. They are taken once a week, simply, and are integrated into a normal routine. Their effect is gradual, constant, profound. And this makes them compatible with our rhythms, our commitments, our reality.</p>
            <p>The resulting weight loss is not a sprint, but a path to follow. A path that does not require us to be perfect, but present and consistent with ourselves.</p>
          </section>
        </div>
        ):
        (
          <div className="article">
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Chi siamo e perché esistiamo</h2>
            <p>In un mondo in cui perdere peso sembra sempre più complicato e pieno di giudizi, noi abbiamo scelto una strada diversa. Non siamo qui per promettere miracoli, né per vendere illusioni. Siamo qui perché sappiamo quanto può essere frustrante provare di tutto — diete, integratori, ore in palestra — senza riuscire a ottenere risultati duraturi. Perché ci siamo passati anche noi. E abbiamo capito che, a volte, serve un supporto in più. Ma deve essere vero, serio, sicuro.</p>
            <p>Il nostro shop nasce per questo: per rendere finalmente accessibili trattamenti farmacologici di nuova generazione, clinicamente testati, che fino a ieri erano disponibili solo tramite prescrizione e solo dopo lunghi percorsi medici. Noi vogliamo che chi è pronto a prendersi cura di sé possa farlo in autonomia, con strumenti efficaci, trasparenti e consegnati in modo riservato.</p>
            <p>Non parliamo di scorciatoie, ma di possibilità reali. Parliamo di farmaci come Semaglutide, Retatrutide, Tirzepatide e la combinazione SEMA+CAGRI, che non sopprimono la fame con la forza, ma aiutano il corpo a ritrovare i propri segnali naturali di fame e sazietà. Terapie pensate per accompagnare chi vuole perdere peso senza restrizioni estreme, senza senso di colpa, senza doversi giustificare con nessuno.</p>
            <h3 className="mt-6">Ci rivolgiamo a chi ha già capito che forza di volontà non basta</h3>
            <p>We are addressing those who have already understood that willpower is not enough</p>
            <p>Il nostro obiettivo è semplice: restituire autonomia e fiducia. Vogliamo che ogni persona che entra in questo spazio si senta accolta, informata, e soprattutto libera. Libera di scegliere se iniziare oggi, o tra un mese. Libera di capire cosa funziona davvero per il proprio corpo, senza dover passare da medici se non lo desidera. Libera di ritrovare il proprio equilibrio, passo dopo passo.</p>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Cosa offriamo: trattamenti di nuova generazione</h2>
            <p>Nel nostro shop non troverete pillole dimagranti da banco né integratori privi di fondamento. Quello che offriamo è una selezione di farmaci clinicamente testati, studiati per agire in profondità sui meccanismi ormonali che regolano fame, sazietà e metabolismo. Sono trattamenti pensati per chi è stanco di tentativi a vuoto e cerca finalmente una soluzione concreta, sicura e supportata da evidenze scientifiche.</p>
            <p>Abbiamo scelto con cura ogni prodotto, valutando l’efficacia reale, la tollerabilità e la qualità certificata della fornitura. Non lavoriamo con intermediari dubbi né con magazzini di fortuna. Quello che proponiamo è ciò che noi stessi vorremmo trovare: prodotti seri, verificabili, in grado di fare la differenza nel tempo, senza imposizioni né promesse irreali.</p>
            <div className="space-y-4 mt-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner_1.jpg"
                    alt="Semaglutide"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
                <div className="col-span-8">
                  <h3>Semaglutide: per regolare la fame e il metabolismo con equilibrio</h3>
                  <p>Il Semaglutide è uno dei trattamenti più avanzati oggi disponibili per la gestione del peso. Agisce sui recettori GLP-1, aiutando a ridurre l’appetito e migliorare il controllo glicemico, senza dover contare calorie o vivere nella restrizione. Lo offriamo in diversi dosaggi, per permettere un approccio graduale, costruito sulle reali esigenze del corpo.</p>
                  <p>È ideale per chi desidera perdere peso in modo fisiologico, senza scossoni né effetti collaterali invasivi. Molti dei nostri clienti iniziano proprio da qui.</p>
                </div>
  
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-8">
                  <h3>Retatrutide: il trattamento triplo che guarda al futuro</h3>
                  <p>Retatrutide 4 mg rappresenta la nuova frontiera nel controllo del peso. Si tratta di un agonista a tripla azione che stimola contemporaneamente i recettori GLP-1, GIP e glucagone. Questo significa una regolazione più completa dell'appetito, una maggiore efficienza metabolica e una stimolazione naturale del consumo energetico.</p>
                  <p>È il trattamento che consigliamo a chi ha già provato terapie GLP-1 tradizionali e desidera un supporto più ampio, senza aumentare la complessità.</p>
                </div>
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner_3.jpg"
                    alt="Semaglutide"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-4">
                  <Image
                    src="/assets/product_banner.jpg"
                    alt="SEMA + CAGRI: Double Action, Less Hunger and More Control"
                    width={'480'}
                    height={'240'}
                    className="overflow-hidden rounded-2xl border border-gray-300"
                  />
                </div>
                <div className="col-span-8">
                  <h3>SEMA + CAGRI: doppia azione, meno fame e più controllo</h3>
                  <p>La combinazione tra Semaglutide e Cagrilintide è una delle più interessanti tra le nuove proposte. Due principi attivi che agiscono in sinergia: uno stimola la sazietà rapida, l’altro la mantiene nel tempo. Il risultato? Porzioni più piccole, meno voglia di spuntini, meno pensieri ossessivi sul cibo.</p>
                  <p>È una soluzione adatta a chi ha bisogno di un intervento ormonale più preciso, ma vuole evitare effetti drastici.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-8 shadow-lg">
                <div className="col-span-8">
                  <h3>Tirzepatide: innovazione GLP-1 + GIP per una strategia potente ma sostenibile</h3>
                  <p>Tirzepatide combina due meccanismi: quello del GLP-1 e quello del GIP. È un trattamento potente, spesso consigliato in ambito clinico per chi presenta obesità resistente o metabolismo rallentato. Nel nostro shop è disponibile senza prescrizione, per chi desidera affrontare il cambiamento con responsabilità ma senza barriere.</p>
                  <p>Lo proponiamo a chi ha già esperienza con analoghi del GLP-1 e vuole passare a un trattamento ancora più completo.</p>
                </div>
                <div className="col-span-4">
                  {/* <Image/> */}
                </div>
              </div>
            </div>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Perché scegliere questi prodotti per dimagrire?</h2>
            <p>Abbiamo imparato sulla nostra pelle che dimagrire non è solo una questione di forza di volontà. Non è nemmeno una questione di calorie, diete drastiche o ore di palestra. Il problema va più in profondità, e riguarda come il nostro corpo regola l’appetito, la fame emotiva, il metabolismo degli zuccheri e l’accumulo di grassi. Ed è qui che questi trattamenti fanno davvero la differenza.</p>
            <p>I prodotti che proponiamo non sono palliativi. Sono il frutto di anni di studi clinici e di sperimentazione controllata. Sono strumenti ormonali mirati, progettati per ripristinare l’equilibrio interno tra fame e sazietà, tra ciò che mangiamo e ciò che consumiamo, tra il desiderio di cibo e il bisogno reale di nutrimento.</p>
  
            <h3>Agiscono dove serve: nel cuore del sistema metabolico</h3>
            <p>Semaglutide, Retatrutide, Tirzepatide, SEMA+CAGRI non si limitano a sopprimere la fame. Intervengono su recettori specifici (GLP-1, GIP, amilina, glucagone) che regolano il comportamento alimentare e la gestione dell’energia. Questo significa che aiutano a:</p>
            <ul>
              <li>Sentirci sazi prima, con porzioni più piccole.</li>
              <li>Prolungare la sazietà dopo i pasti.</li>
              <li>Ridurre la voglia di zuccheri e spuntini impulsivi.</li>
              <li>Migliorare il controllo glicemico, evitando picchi e crolli.</li>
              <li>Migliorare il controllo glicemico, evitando picchi e crolli.
              </li>
            </ul>
            <p>Non parliamo di dimagrimenti forzati o diete da 800 calorie al giorno. Parliamo di riprogrammare il corpo a funzionare meglio, senza punizioni e senza rinunce estreme.</p>
          </section>
  
          <section className="border-b-[1px] border-gray-300 py-4 sm:py-6 md:py-8 lg:py-12">
            <h2>Ci aiutano a liberarci dal pensiero costante del cibo</h2>
            <p>Uno degli effetti più apprezzati da chi usa questi trattamenti è la sensazione di libertà mentale. Per la prima volta, possiamo attraversare una giornata senza pensare continuamente a cosa mangiare, a come compensare, a quanto abbiamo sbagliato. La fame perde potere. Il cibo torna ad essere nutrimento, piacere, ma non ossessione.</p>
            <p>È una trasformazione che ha conseguenze anche sul piano emotivo. Dormiamo meglio. Abbiamo più energia. Ci sentiamo più stabili. E, soprattutto, ci riappropriamo della nostra giornata senza il peso costante del controllo.</p>
          </section>
  
          <section className="pt-4 sm:pt-6 md:pt-8 lg:pt-12">
            <h2>Sono sostenibili nel tempo e si adattano alla nostra vita reale</h2>
            <p>Questi prodotti non richiedono di cambiare vita. Non ci costringono a seguire regole rigide né a rinunciare a tutto. Si assumono una volta a settimana, con semplicità, e si integrano in una routine normale. Il loro effetto è graduale, costante, profondo. E questo li rende compatibili con i nostri ritmi, i nostri impegni, la nostra realtà.</p>
            <p>La perdita di peso che ne deriva non è uno sprint, ma una strada percorribile. Una strada che non ci chiede di essere perfetti, ma presenti e coerenti con noi stessi.</p>
          </section>
        </div>
        )
      }



    </main>
  </>
  );
}
