---
to: src/widgets/<%=name %>/index.tsx
---
<%= interfaceName = "I"+Name %>
import React from 'react'

interface <%=interfaceName%> {
}
const <%=Name%>: FC = (i<%=name%>: <%=interfaceName%>) => {
    return (
        <>

        </>
    );
}

export default <%=Name%>;