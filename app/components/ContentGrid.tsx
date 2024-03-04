import { ContentTile } from "./ContentTile";

export const ContentGrid = () => {
  return (
    <div className="content-grid">
      <div className="container mx-auto my-30 mr-auto">
        <h3 className="h3 section-header font-bold text-gray-900 mb-5">
          Our services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          <div className="grid md:grid-flow-col md:gap-20">
            <ContentTile
              imgSrc="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Dyno Tuning"
            />
          </div>

          <div>
            <div className="grid grid-flow-col gap-20">
              <ContentTile
                imgSrc="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Performance Updrades"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-flow-col gap-20">
              <ContentTile
                imgSrc="https://www.pulsarturbo.com.au/cdn/shop/files/logo_G30_1024x1024@2x.webp?v=1686715068"
                title="Turbo specialist"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-flow-col gap-20">
              <ContentTile
                imgSrc="https://www.pulsarturbo.com.au/cdn/shop/files/logo_G30_1024x1024@2x.webp?v=1686715068"
                title="Pulsar Reseller"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
