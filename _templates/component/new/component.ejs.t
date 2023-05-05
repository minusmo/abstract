---
to: src/components/<%=name %>/index.tsx
---
<%= interfaceName = "I"+name %>
import React from 'react'

interface <%=interface%> {
}
const <%=name%>: FC = (i<%=name%>: <%=interfaceName%>) => {
    return <></>;
}

export default <%=name%>;